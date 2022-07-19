import {createRouter , createWebHistory} from 'vue-router';
import HomePage from './pages/Home.vue';
import IndexUser from './pages/users/Index.vue';
import ShowUser from './pages/users/Show.vue';
import TemplateUser from './pages/users/Template.vue'

const routes = [
       {path : "/" ,name : "HomePage" , component : HomePage},
       { path : "/users", name : "Users" , component : TemplateUser , children : [
              {path : ":id" ,name : "UserId" , component : ShowUser},
              { path : "", name : "users" , component : IndexUser}
       ]},
      
       { path : "/posts", name : "Users" , component : TemplateUser , children : [
              {path : ":id" ,name : "UserId" , component : ShowUser},
              { path : "", name : "users" , component : IndexUser}
       ]},

];

const router = createRouter({
       history : createWebHistory(),
       routes

});

export default router;