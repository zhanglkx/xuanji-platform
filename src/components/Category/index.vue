<template>
  <div>
    <!--属性选项-->
    <el-card>
      <el-form :inline="true">
        <!---->
        <el-form-item label="一级分类">
          <!-- label:即为展示数据 value:即为select下拉菜单收集的数据 -->
          <el-select
            :disabled="scene != 0"
            v-model="categoryStore.c1Id"
            @change="handler"
          >
            <el-option
              v-for="(c1, index) in categoryStore.c1Arr"
              :key="c1.id"
              :label="c1.name"
              :value="c1.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <!--二级分类-->
        <el-form-item label="二级分类">
          <el-select
            :disabled="scene != 0"
            v-model="categoryStore.c2Id"
            @change="handler1"
          >
            <el-option
              v-for="(c2, index) in categoryStore.c2Arr"
              :key="c2.id"
              :label="c2.name"
              :value="c2.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <!--三级分类-->
        <el-form-item label="三级分类">
          <el-select :disabled="scene != 0" v-model="categoryStore.c3Id">
            <el-option
              v-for="(c3, index) in categoryStore.c3Arr"
              :key="c3.id"
              :label="c3.name"
              :value="c3.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reqC1 } from '@/api/product/attr'
import { onMounted, ref } from 'vue'
import useCategoryStore from '@/store/modules/category.ts'

defineProps(['scene'])

let categoryStore = useCategoryStore()

// 存储一级分类的数据
let caArr = ref<any>([])
let c1Id = ref<number | string>('')

onMounted(() => {
  getC1()
})

const getC1 = async () => {
  await categoryStore.getC1()
}
/**
 * //此方法即为一级分类下拉菜单的change事件(选中值的时候会触发,保证一级分类ID有了)
 */
const handler = async () => {
  //需要将二级、三级分类的数据清空
  categoryStore.c2Id = ''
  categoryStore.c3Arr = []
  categoryStore.c3Id = ''
  await categoryStore.getC2()
}
/**
 *此方法即为二级分类下拉菜单的change事件(选中值的时候会触发,保证二级分类ID有了)
 */
const handler1 = async () => {
  //清理三级分类的数据
  categoryStore.c3Id = ''
  await categoryStore.getC3()
}
</script>

<style scoped></style>
