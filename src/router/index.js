import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue"; // Use @ alias
import ThreeDemo from "@/components/ThreeDemo.vue"; // Use @ alias.
import About from "@/components/About.vue"; // Use @ alias.

export const routes = [
  {
    path: "/threeDemo",
    name: "ThreeDemo",
    component: ThreeDemo, // Add the About route
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About, // Add the About route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
