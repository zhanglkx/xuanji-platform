<script setup lang="ts">
import {ref, reactive, computed} from 'vue'
import {onMounted} from 'vue'
import useUserStore from '@/store/modules/user.ts'

const titleClass = ref('title')
const yellowClass = ref('yellow')
const judge = ref(false);
const isActive = ref(true)

const activeColor = ref('red')
const fontSize = ref(30)

let UserStore = useUserStore()
onMounted(() => {
  UserStore.userInfo()
})

const classObject = reactive({
  titleClass: isActive
})

const classComputed = computed(() => ({
  computed: isActive
}))

const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})


</script>

<template>
  <div style="font-size: 20px;font-weight: bold">对象形式</div>
  <br/>
  <!--  对象形式下，对应的yellowClass是真实写在 style 标签中的属性，
  而不是const yellowClass = ref('yellow')声明的变量-->
  <h1
      class="static"
      :class="{yellowClass: !!isActive }">

    动态绑定 class；对象字面量形式
  </h1>

  <br/>
  <div
      class="static"
      :class="classObject"
  >动态绑定 class；对象Object形式
  </div>

  <br/>
  <div
      class="static"
      :class="classComputed"
  >动态绑定 class；计算属性形式
  </div>
  <br/>

  <div style="font-size: 20px;font-weight: bold">数组形式</div>

  <br/>
  <h1 :class="[judge === true ? titleClass  : yellowClass]">动态绑定 class；数组形式-判断</h1> <!-- 此处添加一个动态 class 绑定 -->
  <br/>
  <div :style="[ titleClass]">数组形式</div>

  <br/>
  <!--  两个相同的 color 属性，后边的生效-->
  <div :class="[titleClass, titleClass]">动态绑定 class；数组形式</div>
  <br/>

  <div style="font-size: 20px;font-weight: bold">内联样式</div>
  <br/>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">内联样式</div>
  <br/>
  <!--  尽管推荐使用 camelCase，但 :style 也支持 kebab-cased 形式的 CSS 属性 key (对应其 CSS 中的实际名称)，例如：-->
  <div :style="{ 'font-size': fontSize + 'px' }">内联样式kebab-cased 形式</div>
  <br/>
  <div :style="styleObject">直接绑定一个样式</div>
</template>

<style scoped>
.title {
  color: red;
}


.yellow {
  color: pink;
}

.yellowClass {
  color: pink;
}

.titleClass {
  color: #2fff13;
}

.computed {
  color: #af0bdc;
}

.static {
  background: #0a8ab6;
}
</style>
