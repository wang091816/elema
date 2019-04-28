<template>
  <div class="tou">
    <el-header style="text-align: left;  font-size: 13px">
      <span>{{list}}</span>
      <!--<span>limei</span>-->
    </el-header>
  </div>
</template>






<script>
  export default{
    props:[
      "list",
    ],


  }
</script>






<style>
.tou{
  width: 100%;
  height: 55px;
  line-height: 55px;
  background: #EFF2F7;
  color: grey;
}


</style>