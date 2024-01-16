<template>
    <div class="navbar">
        <input type="checkbox">
        <span></span>
        <span></span>
        <ul>
            <li><a href="javascript:void(0)">点赞</a></li>
            <li><a href="javascript:void(0)">关注</a></li>
            <li><a href="javascript:void(0)">收藏</a></li>
            <li><a href="javascript:void(0)">评论</a></li>
            <li><a href="javascript:void(0)">分享</a></li>
        </ul>
    </div>
</template>




<style>
.navbar {
    border: solid 1px red;
    width: 500px;
    height: 100vh;
}

input:checked {
    width: 300px !important;
    border: solid 1px rgba(102, 255, 0, 0.62) !important;
}

input {
    width: 30px !important;
}
</style>
