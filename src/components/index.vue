<template>
  <div style="text-align: center;padding-top: 200px;font-size: 20px;">
    <el-link style="font-size: 20px;padding-left: 20px;" type="primary" @click="gotoDataset">知识库管理</el-link>
    <el-link style="font-size: 20px;padding-left: 20px;" type="primary" @click="gotoUpload">文件管理</el-link>
    <el-link style="font-size: 20px;padding-left: 20px;" type="primary" @click="gotoSearch">相似度检索</el-link>
  </div>
</template>

<script>
    export default {
      methods: {
        gotoDataset(){
          this.$router.push({path: 'dataset'});
        },

        gotoUpload(){
          this.$router.push({path: 'upload'});
        },

        gotoSearch(){
          this.$router.push({path: 'search'});
        },

      }
    }
</script>

<style scoped>

</style>
