<template>
  <div>
    <div class="css-box" id="box"></div>
  </div>
</template>

<script setup>
/**
 * 原地址
 * https://gitee.com/k21vin/front-end-data-visualization/blob/master/src/views/Native/PureCSS/pages/BorderAnimation/BorderAnimation.vue#
 */
</script>

<style lang="scss" scoped>
.css-box {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  background: #0a8ab6 linear-gradient(-225deg, white, red, yellow 80%, green, black);
  border-radius: 10% 20% 30% 40%/40% 30% 20% 10%;
  transition: border-radius 3s linear;
  animation: borderAnimation 10s infinite;
}

@keyframes borderAnimation {
  0% {
    border-radius: 10% 20% 30% 40%/40% 30% 20% 10%;
  }
  20% {
    border-radius: 51% 49% 20% 80%/20% 30% 90% 10%;
  }
  40% {
    border-radius: 74% 26% 50% 50%/40% 60% 20% 80%;
  }
  60% {
    border-radius: 60% 40% 30% 70%/70% 30% 40% 60%;
  }
  20% {
    border-radius: 51% 49% 20% 80%/20% 30% 90% 10%;
  }
  0% {
    border-radius: 10% 20% 30% 40%/40% 30% 20% 10%;
  }
}

</style>
