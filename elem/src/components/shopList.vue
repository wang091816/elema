<template>
  <div id="box1">
    <Header :list="list"></Header>
    <el-table
    :data="table"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺名称"
      property="name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      property="address">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      property="category">
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
    axios
      .get(
        "https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20"
      )
      .then(item => {
        console.log(item.data);
        this.table = item.data;
      });
    // console.log(this.table)
    this.list = this.$route.params.username;
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
      axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset"+"="+this.num*20+"&limit=20").then(item => {
            console.log(item.data);
            this.table=item.data
            });
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