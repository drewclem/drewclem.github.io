import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Blog from "./views/Blog"
import BlogArticle from "./views/Blog/_article_id"
import Projects from "./views/Projects.vue"
import Contact from "./views/Contact.vue"
import Thanks from "./views/Thanks.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/blog/:slug",
      name: "article",
      component: BlogArticle,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/contact/thanks",
      name: "thanks",
      component: Thanks,
    },
  ],
})
