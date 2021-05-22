<template>
    <el-container class="con">
         <el-header>
            <el-row>
                <el-col :span="6"><b>Company name</b></el-col>
                <el-col :span="3" :offset="15">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        Admin<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="el-icon-edit">Edit password</el-dropdown-item><br> 
                        <el-dropdown-item>
                             <el-button class="logout-topbar" @click="logout">Logout</el-button>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </el-header>
    <el-card class="main-card">
      
    </el-card>
    </el-container>
</template>
<script>
export default {
name:'Feedback',
methods: {
    async logout(){
        this.resetStore();
        this.$router.push("/login");
    },
    resetStore() {
      this.$store.dispatch("globalReset");
    },
},
    data() {
        return {
           
        }
    }
}
</script>

<style scoped>
.main-card{
    margin-top: 2%;
    margin-left: 5%;
    margin-right: 5%;
}
.con{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.logout-topbar {
    background: none;
    border: none;
    padding-top: 0;
    padding-bottom: 0;
}
</style>

