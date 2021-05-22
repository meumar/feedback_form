<template>
  <el-header>
    <el-row>
      <el-col :span="6"><b>Company name</b></el-col>
      <el-col :span="3" :offset="15">
        <el-button type="primary" size="small" @click="goToLogin"
          >Admin Login</el-button
        >
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
export default {
  name: "heading",
  methods: {
    goToLogin() {
      this.$router.push({ name: "Login" });
      this.login = false;
    },
  },
};
</script>

<style>
</style>