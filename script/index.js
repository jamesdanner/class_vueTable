const vm = new Vue({
  el: '#app',
  data: function() {
    return { 
      userInfo: {
        name: '',
        phoneNum: '',
        gender: '',
        birthday: '',
      },
      tableData: [{
        name: '王小虎',
        phoneNum: 18900768987,
        gender: '男',
        birthday: '2016-05-02',
      }, {
        name: '大柱子',
        phoneNum: 18900768987,
        gender: '男',
        birthday: '2016-05-02',
      }],
      editUser: {
        name: '',
        phoneNum: '',
        gender: '',
        birthday: '',
      },
      dialogVisible: false,
      userIndex: 0,
     }
  },
  methods: {
    addUser() {
      if (!this.userInfo.name) {
        this.$message({
          message: '请填写姓名然后再添加',
          type: 'warning'
        });
        return;
      }
      if (!this.userInfo.gender) {
        this.$message({
          message: '请填写性别然后再添加',
          type: 'warning'
        });
        return;
      }
      if (!this.userInfo.birthday) {
        this.$message({
          message: '请填写生日码然后再添加',
          type: 'warning'
        });
        return;
      }
      if (!(/^1[3456789]\d{9}$/.test(this.userInfo.phoneNum))) {
        this.$message({
          message: '请填写电话号码然后再添加',
          type: 'warning'
        });
        return;
      }
      
      this.tableData.push(this.userInfo);
      this.userInfo = {
        name: '',
        phoneNum: '',
        gender: '',
        birthday: '',
      };
      this.$message({
        message: '添加成功！',
        type: 'success'
      });
    },
    delUser(idx) {
      this.$confirm('确认删除？')
        .then(_ => {
          this.tableData.splice(idx, 1);
        })
        .catch(_ => {});
      
    },
    handleClose() {
      this.dialogVisible = false;
    },
    ediUser(item, index) {
      this.userIndex = index;
      this.editUser = {
        name: item.name,
        phoneNum: item.phoneNum,
        gender: item.gender,
        birthday: item.birthday,
      };
      this.dialogVisible = true;
    },
    confirm() {
      Vue.set(this.tableData, this.userIndex, this.editUser)
      this.editUser = {
        name: '',
        phoneNum: '',
        gender: '',
        birthday: '',
      };
      this.dialogVisible = false;
      this.$message({
        message: '恭喜你修改成功！',
        type: 'success'
      });
    }
  }
})