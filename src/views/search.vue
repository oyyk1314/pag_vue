<template>
  <div style="text-align: center;padding-top: 100px;">
      <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input style="width: 500px;"
              v-model="search"
              class="search_name"
               placeholder="请输入问题">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="text"
              @click="onSearch()"
              class="el-icon-search">查询
            </el-button>
          </el-form-item>

        <el-form-item>
          <el-button
             type="text"
            @click="goReturn">返回
          </el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    userId: '',
                    user: '',
                    type: '',
                    description: ''
                },
                tableData: [],
                search: '',
                dialogVisible: false,
                dialogUpdate: false,
                pageSize: 5,
                currentPage: 1,
                total: 0,
                disablePage: false
            }
        },
        methods: {
            onSearch() {
                let postData = this.qs.stringify({
                    name: this.search
                });
                this.axios({
                    method: 'post',
                    url: '/queryByName',
                    data: postData
                }).then(response =>
                {
                    this.tableData = response.data;
                    this.disablePage = true;
                }).catch(error =>
                {
                    console.log(error);
                });
            },
            goReturn(){
              this.$router.push({path: '/'});
            },
            getPages() {
                this.axios.post('/rowsDataset').then(response =>
                {
                    this.total = response.data;
                }).catch(error =>
                {
                    console.log(error);
                });
            },
            refreshData() {
                location.reload();
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
