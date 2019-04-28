<template>
  <div id="box1">
    <Header :list="list"></Header>
    <el-table :data="table" style="width: 100%">
      <el-table-column label="姓名" width="320" property="user_name">
      
      </el-table-column>
      <el-table-column label="注册日期" width="320" property="create_time">
        
      </el-table-column>
      <el-table-column label="地址" width="320" property="city">
       
      
      </el-table-column>
      <el-table-column label="权限" width="320" property="admin">
       
      
      </el-table-column>
      
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        background
        layout="total,prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Header from "./header";
export default {
  data() {
    return {
      table: [],
      list: "",
      currentPage1: 1
    };
  },
  components: {
    Header
  },
  created() {
      axios.get("https://elm.cangdu.org/admin/all?offset=0&limit=20").then((item)=>{
          console.log(item.data.data)
          this.table=item.data.data
      })
    this.list = this.$route.params.headername;
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>


<style>
#box1 {
  width: 100%;
  height: 100%;
}
</style>