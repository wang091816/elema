<template>
  <div id="box1">
    <Header :list="list"></Header>
    <el-table :data="table" style="width: 100%">
      <el-table-column label="订单ID" width="320" property="address_id">
      
      </el-table-column>
      <el-table-column label="总价格" width="320" property="total_amount">
        
      </el-table-column>
      <el-table-column label="订单状态" width="320" property="status_bar.title">
       
      
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
      axios.get("https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined").then((item)=>{
          console.log(item.data)
          this.table=item.data
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