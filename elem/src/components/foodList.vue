<template>
  <div id="box1">
    <Header :list="list"></Header>
    <el-table :data="table" style="width: 100%">
        <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="食品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="食品ID">
            <span>{{ props.row.item_id }}</span>
          </el-form-item>
          <el-form-item label="餐馆ID">
            <span>{{ props.row.category_id }}</span>
          </el-form-item>
          <el-form-item label="食品介绍">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="餐馆地址">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="食品评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="食品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
           <el-form-item label="月销量">
            <span>{{ props.row.month_sales }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
      <el-table-column label="食品名称" width="320" property="name">
      
      </el-table-column>
      <el-table-column label="食品介绍" width="320" property="">
        
      </el-table-column>
      <el-table-column label="评分" width="320" property="rating">
       
      
      </el-table-column>
      
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
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
      currentPage1: 1,
      srr:0
    };
  },
  components: {
    Header
  },
  created() {
    // console.log(this.table)
   
    axios.get("https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined").then((item)=>{
         console.log(item.data)
         this.table=item.data
    })
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
       this.srr=val-1
       console.log(this.srr)
      axios.get("https://elm.cangdu.org/shopping/v2/foods?offset"+"="+this.srr*20+"&limit=20&restaurant_id=undefined").then(item => {
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