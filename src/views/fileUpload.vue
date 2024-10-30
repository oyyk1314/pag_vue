<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-upload
        ref="upload"
        :limit="1"
        accept=".pdf"
        :headers="upload.headers"
        :action="upload.url"
        :disabled="upload.isUploading"
        :on-progress="handleFileUploadProgress"
        :on-success="handleFileSuccess"
        :auto-upload="false"
        drag
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip text-center" slot="tip">
          <div class="el-upload__tip" slot="tip">
            <el-checkbox v-model="upload.updateSupport" /> 是否更新已经存在的用户数据
          </div>
          <span>仅允许导入pdf格式文件。<el-button type="primary" @click="submitFileForm">确 定</el-button>
</span>
        </div>
      </el-upload>
      <div slot="footer" class="dialog-footer">

       </div>

    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        upload: {
          // 是否显示弹出层（用户导入）
          open: false,
          // 弹出层标题（用户导入）
          title: "",
          // 是否禁用上传
          isUploading: false,
          // 是否更新已经存在的用户数据
          updateSupport: 0,
          // 设置上传的请求头部
          headers: { Authorization: "Bearer " },
          // 上传的地址
          url: "http://localhost:8081/common/upload"
        },
      }
    },
    methods: {
      handleEdit(index, row) {
        this.dialogUpdate = true;
        this.ruleForm = Object.assign({}, row); //这句是关键！！！
      },

      // 文件上传中处理
      handleFileUploadProgress(event, file, fileList) {
        this.upload.isUploading = true;
      },


      handleFileSuccess(res, file) {
        this.$message.success(res);
        setTimeout(this.$router.go(0), 5000)
      },

      // 提交上传文件
      submitFileForm() {
        this.$refs.upload.submit();
      }

    },
    created() {
      /*this.axios.get('static/user.json').then(response =>
      {
          this.tableData = response.data.tableData;
          this.total = response.data.tableData.length;
          // console.log(JSON.parse(JSON.stringify(response.data))['tableData'])
      });*/
      this.axios.post('/pageDataset').then(response =>
      {
        this.tableData = response.data;
      }).catch(error =>
      {
        console.log(error);
      });

      this.axios.post('/rowsDataset').then(response =>
      {
        this.total = response.data;
      }).catch(error =>
      {
        console.log(error);
      });

    },
  }
</script>
<style scoped>
  .search_name{
    width: 200px;
  }
  .pages{
    margin: 0px;
    padding: 0px;
    text-align: right;
  }
</style>
