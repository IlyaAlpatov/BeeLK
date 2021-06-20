import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/profileView.vue";
import Login from "../views/login.vue";
import Ratings from "../views/ratingsView.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Ratings",
    name: "Ratings",
    component: Ratings,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;