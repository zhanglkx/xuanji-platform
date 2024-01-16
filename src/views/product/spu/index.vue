<template>
    <div>
        <!-- 三级分类全局组件 -->
        <Category :scene="scene" />

        <el-card style="margin: 10px 0">
            <div v-show="scene == 0">
                <el-button type="primary" icon="Plus" :disabled="!categoryStore.c3Id" @click="addSPU">
                    添加SPU
                </el-button>

                <!--展示数据的列表-->
                <el-table border class="date-table" :data="records">
                    <el-table-column type="index" align="center" width="80px" label="序号"></el-table-column>
                    <el-table-column prop="spuName" label="SPU名称"></el-table-column>
                    <el-table-column prop="description" label="SPU描述"></el-table-column>
                    <el-table-column align="center" label="SPU操作">
                        <template #="{ row, index }">
                            <el-button type="primary" title="添加SKU" icon="Plus" @click="addSku(row)"></el-button>
                            <el-button type="primary" title="修改SPU" icon="Edit" @click="updateSpu(row)"></el-button>
                            <el-button type="primary" title="查看SPU" icon="View" @click="findSku(row)"></el-button>
                            <el-button type="primary" title="删除SPU" icon="Delete" @click="deleteSpu(row)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[3, 5, 7, 9]"
                    :background="true" layout="prev,pager,next,jumper,->,sizes,total" :total="total"
                    @current-change="getHasSpu" @size-change="changeSize"></el-pagination>
            </div>

            <SpuForm ref="spu" v-show="scene == 1" @changeScene="changeScene"></SpuForm>

            <SkuForm ref="sku" v-show="scene == 2" @changeScene="changeScene"></SkuForm>

            <!-- dialog对话框:展示已有的SKU数据 -->
            <el-dialog v-model="show" title="SKU列表">
                <el-table border :data="skuArr">
                    <el-table-column label="SKU名字" prop="skuName"></el-table-column>
                    <el-table-column label="SKU价格" prop="price"></el-table-column>
                    <el-table-column label="SKU重量" prop="weight"></el-table-column>
                    <el-table-column label="SKU图片">
                        <template #="{ row, $index }">
                            <img :src="row.skuDefaultImg" style="width: 100px; height: 100px" />
                        </template>
                    </el-table-column>
                </el-table>
            </el-dialog>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'
import { reqHasSpu, reqRemoveSpu, reqSkuList } from '@/api/product/spu'
import {
    HasSpuResponseData,
    Records,
    SkuData,
    SkuInfoData,
    SpuData,
} from '@/api/product/spu/type.ts'
import useCategoryStore from '@/store/modules/category.ts'
import SkuForm from '@/views/product/spu/skuForm.vue'
import SpuForm from '@/views/product/spu/spuForm.vue'
import { ElMessage } from 'element-plus'

let categoryStore = useCategoryStore()
// 当前窗口显示的数据 判断页面显示的类型
let scene = ref<number>(0)
// 当前页面展示的数据
let records = ref<Records>([])
// 存储以后的spu个数
let total = ref<number>(0)
// 当前页码
let pageNo = ref<number>(1)
// 每一页显示的数据条数
let pageSize = ref<number>(9)
//获取子组件实例SpuForm
let spu = ref<any>()
//获取子组件实例SkuForm
let sku = ref<any>()
// 是否展示 dialog
let show = ref<boolean>(false)
//存储全部的SKU数据
let skuArr = ref<SkuData[]>([])
watch(
    () => categoryStore.c3Id,
    () => {
        //   当三级分类发生变化的时候，清空对应数据
        records.value = []
        //   三级分类非空
        if (!categoryStore.c3Id) return
        getHasSpu()
    },
)

/**
 * 获取当前页码的数据
 * @param pager
 */
//此方法执行:可以获取某一个三级分类下全部的已有的SPU
const getHasSpu = async (pager = 1) => {
    pageNo.value = pager

    let result: HasSpuResponseData = await reqHasSpu(
        pageNo.value,
        pageSize.value,
        categoryStore.c3Id,
    )

    if (result.code == 200) {
        records.value = result.data.records
        total.value = result.data.total
        console.log(result)
    }
}

//添加新的SPU按钮的回调
const addSPU = () => {
    //切换为场景1:添加与修改已有SPU结构->SpuForm
    scene.value = 1
    //点击添加SPU按钮,调用子组件的方法初始化数据
    spu.value.initAddSpu(categoryStore.c3Id)
}

/**
 * 四个按钮动作---添加
 * @param row 行数据
 */
const addSku = (row: SpuData) => {
    //点击添加SKU按钮切换场景为2
    scene.value = 2
    //调用子组件的方法初始化添加SKU的数据
    sku.value.initSkuData(categoryStore.c1Id, categoryStore.c2Id, row)
}
/**
 * 四个按钮动作---编辑
 * @param row 行数据
 */
const updateSpu = (row: SpuData) => {
    //切换为场景1:添加与修改已有SPU结构->SpuForm
    scene.value = 1
    //调用子组件实例方法获取完整已有的SPU的数据
    spu.value.initHasSpuData(row)
}
/**
 * 四个按钮动作---查看
 * @param row 行数据
 */
const findSku = async (row: SpuData) => {
    let result: SkuInfoData = await reqSkuList(row.id as number)
    if (result.code == 200) {
        skuArr.value = result.data
        //对话框显示出来
        show.value = true
    }
}
/**
 * 四个按钮动作---删除
 * @param row 行数据
 */
const deleteSpu = async (row: SpuData) => {
    console.dir(row.id);
    let result: any = await reqRemoveSpu(row.id as number)

    if (result.code == 200) {
        ElMessage({
            type: 'success',
            message: '删除成功',
        })
    } else {
        console.log(result);
        ElMessage({
            type: 'error',
            message: '删除失败',
        })
    }
}
// 取消
const changeScene = (obj: any) => {
    //子组件Spuform点击取消变为场景0:展示已有的SPU
    scene.value = obj.flag
    if (obj.params == 'update') {
        //更新留在当前页
        getHasSpu(pageNo.value)
    } else {
        //添加留在第一页
        getHasSpu()
    }
}

const changeSize = () => {
    getHasSpu()
}

onUnmounted(() => { })
</script>
<style scoped lang="scss">
.date-table {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
