<template>
  <div class="blog-post">
    <h4>名字：{{ props.title }}</h4>
    <h4>名字：{{ props.id }}</h4>
    <ElButton class="btn" @click="enlargeText">Enlarge text</ElButton>
  </div>
</template>
  
<script setup lang="ts">
/**
 * 定义props 这里的props是一个proxy对象，包含了所有父组件传过来的数据，比如父组件传过来的title，id，那么props就是{id: 1, title: 'My journey with Vue'}的数据形式
 */
// const props = defineProps(["title", 'id']);
/**
 * 定义props 带有默认值和类型
 */
const props = defineProps({
  title: {
    type: String,
    default: 'My journey with Vue'
  },
  id: {
    type: Number,
    default: 1
  }
});
console.log(props);

const emit = defineEmits(["enlarge-text"]);
import { ElButton } from 'element-plus';

const enlargeText = () => {
  emit("enlarge-text");
};

</script>
  
<style scoped>
.blog-post {
  padding: 20px;
  background-color: #a53333;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  border-radius: 4px;
}

.btn {
  background-color: aqua;
}
</style>
  