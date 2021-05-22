<template>
  <el-container>
       <el-header>
            <el-row>
                <el-col :span="6"><b>Company name</b></el-col>
            </el-row>
        </el-header>
    <el-card class="login-card">
       <div slot="header" class="clearfix">
            <h1>Login</h1>
        </div>
        <el-form>
            <el-form-item>
                <el-input type="text" placeholder="Email or Phone" v-model="email"  class="login_form"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" placeholder="password" v-model="password"  class="login_form"></el-input>
            </el-form-item>
            <el-button @click="submit">Login</el-button>
        </el-form>
        
    </el-card>
  </el-container>
</template>
<script>
// import fetchIntercept from 'fetch-intercept';
//import submit from '../store/login'
import { mapGetters } from 'vuex'
export default {
    name:"Login",
    data(){
        return{
            email:'',
            password:'',
            res:[]
        } 
    },
    computed: {
        ...mapGetters("response",["getResponse"])
    },
    methods:{
        async submit(){
            let credentials = {
                username:this.email,
                password:this.password
            };
            await this.$store.dispatch("response/submit",credentials);
            this.res=[...this.getResponse]
        }
    }
}
</script>
<style>
h1{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.login-card{
    margin-left: 35%;
    width: 350px;
}
.login_form{
    margin-left: 17%;
}
</style>