<template>
    <div class="bg-view">
        <div class="card">
            <div class="front">
                <div class="item">求点1赞~</div>
                <div class="item">求点2赞~</div>
                <div class="item">求点3赞~</div>
                <div class="item">求点4赞~</div>
            </div>
            <div class="back">
                <div class="item">求点赞~</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>

<style scoped lang="scss">
.bg-view {
    background-image: linear-gradient(200deg, #5ee7df, #b490ca);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 没加这个属性之前，我们的动画看起来有点生硬，没有任何立体感，所以我们需要添加这个属性来增加卡片旋转时的立体感，这个值越小，立体感就会越明显，立体感最明显的地方就是近大远小，这个的意思就是设置视距，相当于你的眼睛离一个东西的距离，当这个东西离你的眼睛越近，那么这个东西就会越大 */
    /* 这个大家以后做一些3D效果时会经常用到的，划重点哦 */
    perspective: 1000px;
}

.card {
    /* 相对定位 */
    position: relative;
    width: 300px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 30px;
    text-align: center;
    /* 注意不能添加 overflow: hidden 这会导致的话反转的时候只会有一面*/
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    /* 给父元素添加一个3D盒子属性，那么子元素就到背面了，这个属性是加到父元素上的，但是影响的是子元素 */
    transform-style: preserve-3d;
    animation: rotate-reverse 1.2s cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards;
}

.card:hover {
    /* 动画（名称 时长 第三个属性是贝塞尔曲线，我们可以自定义动画的运动轨迹，让动画的运动轨迹有了很多种可能 第四个属性是当我们的动画完成时的状态，一般动画完成之后就回到了0%的状态，默认值是backwards，当我们给的属性值是forwards时，那么动画到100%的时候就会停下来，不会回到0%） */
    /* 哈哈，这里又啰嗦了，大家见谅哈 */
    animation: rotate 1.2s cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards;
    /* 大家有没有发现咱们的动画看起来有点生硬，不是很自然 */
    /* 这里再给大家介绍一个属性，划重点了哦！！ */
}

.front,
.back {
    /* 绝对定位 子元素是绝对定位，父元素需要相对定位 */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* 弹性布局，让元素垂直陈列 */
    display: flex;
    flex-direction: column;
    /* 现在子元素垂直陈列，那么就是让子元素水平居中 */
    align-items: center;
    /* 平均分配高度给每一个子元素 */
    justify-content: space-around;
    font-size: 20px;
    background-color: #fff;
    border-radius: 30px;
    /* 隐藏旋转div元素的背面 */
    backface-visibility: hidden;
}

.back {
    /* 因为背面卡片要到后面去，所以我们给背面卡片加一个沿Y轴旋转180度的属性，这里我们可以看到旋转了，但是没到后面去，原因就是父盒子现在不是3D盒子，而是一个2D盒子，所以我们需要让父元素变成一个3D盒子（哈哈，有点啰嗦了） */
    transform: rotateY(180deg);
}

@keyframes rotate {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(180deg);
    }
}

@keyframes rotate-reverse {
    0% {
        transform: rotateY(180deg);
    }

    100% {
        transform: rotateY(0deg);
    }
}
</style>