<template>
    <div>
        <el-card class="box-card">
            <!--    卡片顶部的添加品牌按钮-->
            <el-button type="primary" size="default" icon="Plus" @click="addTradeMark">
                添加品牌
            </el-button>
            <!--  表格组件:y用于展示以后的品牌数据-->
            <el-table style="margin: 10px 0" border :data="tradeMarkArr">
                <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>

                <el-table-column label="品牌名称" prop="tmName" align="center"></el-table-column>

                <el-table-column label="品牌Logo">
                    <template #="{ row, $index }">
                        <img :src="row.logoUrl" :alt="row.tmName" style="height: 100px; width: 100px" />
                    </template>
                </el-table-column>

                <el-table-column label="品牌操作">
                    <!--row,$index是返回到插槽的数据内容，相当于table给插槽传递的参数，row代表的是当前行的数据，index是序号,column是当前行设置的属性-->
                    <template #="{ row, $index }">
                        <el-button type="primary" size="small" icon="Edit" @click="updateTrademark(row)"></el-button>
                        <!--删除按钮-->
                        <el-popconfirm :title="`您确定要删除${row.tmName}?`" width="200px" icon="Delete"
                            @confirm="removeTradeMark(row.id)">
                            <template #reference>
                                <el-button type="primary" size="small" icon="Delete"></el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
            <!--  分页器组件-->
            <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]"
                :background="true" layout=" prev, pager, next, jumper,->,sizes,total" :total="total"
                @size-change="sizeChange" @current-change="getHasTrademark" />
        </el-card>
        <!-- 对话框组件:在添加品牌与修改已有品牌的业务时候使用结构 -->
        <!--
            v-model:属性用户控制对话框的显示与隐藏的 true显示 false隐藏
             title:设置对话框左上角标题
        -->
        <el-dialog v-model="dialogFormVisible" :title="tradeMarkParams.id ? '修改品牌' : '添加品牌'">
            <el-form style="width: 70%" :model="tradeMarkParams" :rules="rules" ref="formRef">
                <el-form-item label="品牌名称" label-width="100px" prop="tmName">
                    <el-input placeholder="请您输入品牌名称" v-model="tradeMarkParams.tmName"></el-input>
                </el-form-item>
                <el-form-item label="品牌Logo" label-width="100px" prop="logoUrl">
                    <el-upload class="avatar-uploader" action="/api/admin/product/fileUpload" :show-file-list="false"
                        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="tradeMarkParams.logoUrl" :src="tradeMarkParams.logoUrl" class="avatar" alt="添加品牌"
                            style="max-width: 200px; max-height: 200px" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button type="primary" size="default" @click="cancel">
                    取消
                </el-button>
                <el-button type="primary" size="default" @click="confirm">
                    确定
                </el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from 'vue'
import {
    reqHasTradeMark,
    reqAddOrUpdateTrademark,
    reqDeleteTrademark,
} from '@/api/product/trademake'
import type {
    Records,
    TradeMarkResponseData,
    TradeMark,
} from '@/api/product/trademake/type.ts'
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
import { rules } from '@typescript-eslint/eslint-plugin'

let pageNo = ref<number>(1)
let limit = ref<number>(3)
// 已有品牌总数据
let total = ref<number>(0)
// 存储已有品牌数组
let tradeMarkArr = ref<Records>([])
// dialog展示
let dialogFormVisible = ref<boolean>(false)
// 获取rl-from组件实例
let formRef = ref()

let tradeMarkParams = reactive<TradeMark>({
    // id: 0, //要带上id，不然就接口报错
    tmName: '',
    logoUrl: '',
})

/**
 * 上传图片组件->上传图片之前触发的钩子函数
 * @param rawFile 图片文件
 */
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    //钩子是在图片上传成功之前触发,上传文件之前可以约束文件类型与大小
    //要求:上传文件格式png|jpg|gif 4M
    if (
        rawFile.type == 'image/png' ||
        rawFile.type == 'image/jpeg' ||
        rawFile.type == 'image/gif'
    ) {
        if (rawFile.size / 1024 / 1024 < 4) {
            return true
        } else {
            ElMessage({
                type: 'error',
                message: '上传文件大小小于4M',
            })
            return false
        }
    } else {
        ElMessage({
            type: 'error',
            message: '上传文件格式务必PNG|JPG|GIF',
        })
        return false
    }
}

/**
 * 图片上传成功钩子
 * @param response 收集上传图片的地址,添加一个新的品牌的时候带给服务器
 * @param uploadFile  图片文件
 */
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile,
) => {
    //response:即为当前这次上传图片post请求服务器返回的数据
    //收集上传图片的地址,添加一个新的品牌的时候带给服务器
    tradeMarkParams.logoUrl = response.data
    //图片上传成功,清除掉对应图片校验结果
    formRef.value.clearValidate('logoUrl')
}

/**
 * 获取品牌数据接口
 * @param pager 页码
 */
const getHasTrademark = async (pager = 1) => {
    pageNo.value = pager
    let result: TradeMarkResponseData = await reqHasTradeMark(
        pageNo.value,
        limit.value,
    )
    if (result.code == 200) {
        total.value = result.data.total
        tradeMarkArr.value = result.data.records
    }
    console.log(result)
}

onMounted(() => {
    getHasTrademark()
})
//分页器当前页码发生变化的时候会触发
//对于当前页码发生变化自定义事件,组件pagination父组件回传了数据(当前的页码)
// const changePageNo = ()=>{
//     //当前页码发生变化的时候再次发请求获取对应已有品牌数据展示
//     getHasTrademark();
// }

/**
 * 当前每一页的数据量发生变化的时候，当前页码归1
 */
const sizeChange = () => {
    //当前每一页的数据量发生变化的时候，当前页码归1
    //
    getHasTrademark()
}

/**
 * 添加品牌
 */
const addTradeMark = () => {
    tradeMarkParams.logoUrl = ''
    tradeMarkParams.id = 0
    tradeMarkParams.tmName = ''
    dialogFormVisible.value = true
    // 方法一
    // formRef.value?.clearValidate('tmName')
    // formRef.value?.clearValidate('logoUrl')
    //   方法二
    nextTick(() => {
        formRef.value?.clearValidate('tmName')
        formRef.value?.clearValidate('logoUrl')
    })
}

/**
 * 编辑/修改已有品牌
 * @param row 已有品牌数据
 */
const updateTrademark = async (row: TradeMark) => {
    await nextTick(() => {
        formRef.value?.clearValidate('tmName')
        formRef.value?.clearValidate('logoUrl')
    })

    dialogFormVisible.value = true
    // es6语法，合并对象
    Object.assign(tradeMarkParams, row)
    // tradeMarkParams.tmName = row.tmName;
    // tradeMarkParams.logoUrl = row.logoUrl;
    // tradeMarkParams.id = row.id;

    // let result: any = await reqAddOrUpdateTrademark(tradeMarkParams);

    // await getHasTrademark();
}
/**
 * 气泡确认框确定按钮的回调
 * @param id 数据在当页的id
 */
const removeTradeMark = async (id: number) => {
    //点击确定按钮删除已有品牌请求
    let result = await reqDeleteTrademark(id)
    if (result.code == 200) {
        //删除成功提示信息
        ElMessage({
            type: 'success',
            message: '删除品牌成功',
        })
        //再次获取已有的品牌数据
        await getHasTrademark(
            tradeMarkArr.value.length > 1 ? pageNo.value : pageNo.value - 1,
        )
    } else {
        ElMessage({
            type: 'error',
            message: '删除品牌失败',
        })
    }
}

/**
 * 弹出试图取消 按钮点击事件
 */
const cancel = () => {
    dialogFormVisible.value = false
}

/**
 *  弹出试图确定 按钮点击事件
 */
const confirm = async () => {
    //在你发请求之前,要对于整个表单进行校验
    //调用这个方法进行全部表单相校验,如果校验全部通过，在执行后面的语法
    await formRef.value.validate()

    let result: any = await reqAddOrUpdateTrademark(tradeMarkParams)
    if (result.code == 200) {
        dialogFormVisible.value = false
        ElMessage({
            type: 'success',
            message: tradeMarkParams.id ? '修改品牌成功' : '添加品牌成功',
        })

        await getHasTrademark(tradeMarkParams.id ? pageNo.value : 1)
    } else {
        dialogFormVisible.value = false
        ElMessage({
            type: 'error',
            message: tradeMarkParams.id ? '修改品牌失败' : '添加品牌失败',
        })
    }
}

/**
 *  品牌自定义校验规则方法
 * @param ruler 规则
 * @param value
 * @param callback
 */
const validatorTmName = (ruler: any, value: any, callback: any) => {
    //是当表单元素触发blur时候,会触发此方法
    //自定义校验规则
    if (value.trim().length >= 2) {
        callback()
    } else {
        callback(new Error('品牌名称位数大于等于两位'))
    }
}
/**
 * 品牌LOGO图片的自定义校验规则方法
 * @param rule
 * @param value
 * @param callBack
 */
const validatorLogoUrl = (rule: any, value: any, callBack: any) => {
    //如果图片上传
    if (value) {
        callBack()
    } else {
        callBack(new Error('LOGO图片务必上传'))
    }
}
/**
 * 表单校验对象
 */
const rules = {
    tmName: [{ required: true, trigger: 'blur', validator: validatorTmName }],
    logoUrl: [{ required: true, validator: validatorLogoUrl }],
}
</script>

<style scoped lang="scss">
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>
