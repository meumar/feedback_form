import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login";
import Feedback from "../views/feedback"
import Form from "../views/feedback_form";
import AuthMiddleware from "@/middleware/auth"

Vue.use(VueRouter);
const routes = [
    {
        path:"/feedback",
        name:"Feedback",
        component:Feedback,
        beforeEnter: AuthMiddleware.user,
        meta:{
            title:'Feedback'
        }
    },
    {
        path:"/login",
        name:"Login",
        component:Login
    },
    {
        path:"/",
        name:"Form",
        component:Form
    }
]
export default routes;