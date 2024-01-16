<template>
  <div>
    <!--头部搜索数据-->
    <el-card class = "headCard">
      <el-form label-width = "80px" class = "headSearch">

        <el-form-item label = "用户名" class = "search_input">
          <el-input placeholder = "用户名用户名用户"></el-input>
        </el-form-item>

        <el-form-item class = "search_button">
          <el-button type = "primary" :disabled = "true" @click = "search">搜索</el-button>
          <el-button type = "primary" @click = "reset">重置</el-button>
        </el-form-item>

      </el-form>
    </el-card>

    <!--主要内容区域-->
    <el-card class = "main_content">
      <div class = "content_btn">
        <el-button type = "primary" :disabled = "true" @click = "search">添加用户</el-button>
        <el-button type = "primary" @click = "reset">批量删除</el-button>
      </div>

      <el-table @selection-change = "selectChange" border class = "content_table">
        <el-table-column type = "selection" width = "60px" align = "center"></el-table-column>
        <el-table-column label = "#" width = "60px"></el-table-column>
        <el-table-column label = "ID" width = "90px" `></el-table-column>
        <el-table-column label = "用户名字"></el-table-column>
        <el-table-column label = "用户名称"></el-table-column>
        <el-table-column label = "用户角色"></el-table-column>
        <el-table-column label = "创建时间"></el-table-column>
        <el-table-column label = "更新时间"></el-table-column>
        <el-table-column label = "操作"></el-table-column>
      </el-table>
    </el-card>

    <!--分配角色-->
    <el-drawer></el-drawer>

    <!--编辑角色-->
    <el-drawer></el-drawer>
  </div>
</template>
<script setup lang = "ts">

const search = () => {

};

const reset = () => {

};

const selectChange = () => {

};

</script>
<style scoped lang = "scss">
.headCard {
  height: 90px;

  .headSearch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 0 0;

    .search_input {

    }

    .search_button {
      padding: 0 19px;
    }
  }


}

.main_content {
  margin: 10px 0;


  .content_btn {
    margin: 0 10px 10px 0;
  }

  .content_table {
    margin: 10px 0;
  }

}
</style>
