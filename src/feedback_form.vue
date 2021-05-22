<template>
  <div id="app">
    <el-header>
      <el-row>
        <el-col :span="6"><b>Company name</b></el-col>
          <el-col :span="3" :offset="15">
            <el-button type="primary" size="small" @click="goToLogin">Admin Login</el-button>
          </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-container>
        <el-main>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h1>Feedback</h1>
            </div>
            <div>
              <el-form>
                <el-row :gutter="20">
                  <el-col :span="6"><el-input placeholder="Please Enter your name" v-model="name"></el-input></el-col>
                  <el-col :span="6"><el-input placeholder="Enter your phone number" v-model="phone"></el-input></el-col>
                </el-row>
                <el-form-item v-for="question in allQuestions" :key="question.id">{{question.text}}
                  <br>
                  <el-radio-group v-model="question.answer">
                    <el-radio v-for="option in question.options" :key="option" v-bind:label="option" v-bind:value="option"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-button type="success" @click="submitFeedback">Submit</el-button>
              </el-form>
            </div>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name:'Form',
  data(){
    return {
        name: '',
        phone: '',
        answer: '',
        allQuestions:[]
    }
  },

  created() {
    this.loadQuestions();
  },
  computed: {
    ...mapGetters("questions",["getQuestions"])
  },
  methods:{
    async loadQuestions(){
        await this.$store.dispatch("questions/fetchQuestions")
        this.allQuestions = [...this.getQuestions]
    },
    async submitFeedback(){
        let customer_feedback={
            "customer_name": this.name,
            "customer_phonenumber":this.phone,
            "questions":[this.allQuestions],
          };
            const request_feedback = {
                method: "POST",
                body: JSON.stringify(customer_feedback)
            };
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", request_feedback);
            console.log(response)
            console.log(customer_feedback)
            if(response.status == 201){
                this.showSuccess();
            }else{
                this.showError();
            }
    },
    showSuccess(){
         this.$notify({
          title: 'Thank you',
          message:'Your feedback Successfully recorded',
          type: 'success'
        });
        this.refreshForm();
    },
    showError(){
         this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
    },
   async refreshForm(){
       await setTimeout("location.reload(true);", 1000);
    },
    goToLogin(){
      this.$router.replace({name:"Login"});
      this.login=false
    }
  },
} 
</script>

<style>
.el-header {
    background-color: #b6d9db;
    color: whitesmoke;
    line-height: 60px;
    font-size: 25px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .box-card{
    margin-left:10%;
    margin-right: 10%;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .el-input{
    width: 200px;
  }
</style>