import BookmarkView from "@/views/BookmarkView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/bookmark",
      name: "bookmark",
      component: BookmarkView,
    },
  ],
});

export default router;
