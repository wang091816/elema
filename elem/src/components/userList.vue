<template>
  <div id="box1">
    <Header :list="list"></Header>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
                                                                                        
      <el-table-column property="registe_time" label="日期" width="220">
          
      </el-table-column>
      <el-table-column property="username" label="姓名" width="220">
      </el-table-column>
      <el-table-column property="city" label="地址"> </el-table-column>
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
      tableData: [
       
      ],
      currentRow: null,
      list: "",
      currentPage1: 1,
      num:0
    };
  },
  components: {
    Header
  },
  created() {
      axios.get("https://elm.cangdu.org/v1/users/list?offset=0&limit=20").then((item)=>{
          console.log(item.data)
          this.tableData=item.data
         
      })
    this.list = this.$route.params.username;
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.num=val-1
      axios.get("https://elm.cangdu.org/v1/users/list?offset"+"="+this.num*20+"&limit=20").then(item => {
            console.log(item.data);
            this.tableData=item.data
            });
    }
  }
};
</script>


<style>
#box1 {
  background: white;
  width: 100%;
  height: 100%;
}
</style>
