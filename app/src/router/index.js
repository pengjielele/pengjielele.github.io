import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import UIIndex from "@/views/ui/Index.vue";
import UIButton from "@/views/ui/Button.vue";
import UIDistrictPicker from "@/views/ui/DistrictPicker.vue";
import UISwitch from "@/views/ui/Switch.vue";
import UIInputTags from "@/views/ui/InputTags.vue";

import CodeIndex from "@/views/code/Index.vue";
import CodeJavascript from "@/views/code/Javascript.vue";

import AdminIndex from "@/views/admin/Index.vue";
import Welcome from "@/views/admin/Welcome.vue";
import UserList from "@/views/admin/users/Index.vue";
import ArticleList from "@/views/admin/articles/Index.vue";
import TagList from "@/views/admin/tags/Index.vue";
import ContactsList from "@/views/admin/contacts/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/ui",
    name: "UIIndex",
    component: UIIndex,
    children: [
      {
        path: "button",
        name: "button",
        component: UIButton
      },
      {
        path: "districtpicker",
        name: "districtpicker",
        component: UIDistrictPicker
      },
      {
        path: "switch",
        name: "switch",
        component: UISwitch
      },
      {
        path: "inputtags",
        name: "inputtags",
        component: UIInputTags
      }
    ]
  },
  {
    path: "/code",
    name: "codeIndex",
    component: CodeIndex,
    children: [
      {
        path: "javascript",
        name: "javascript",
        component: CodeJavascript
      }
    ]
  },
  {
    path: "/admin",
    name: "adminIndex",
    component: AdminIndex,
    children: [
      {
        path: "welcome",
        name: "welcome",
        component: Welcome
      },
      {
        path: "users",
        name: "users",
        component: UserList
      },
      {
        path: "tags",
        name: "tags",
        component: TagList
      },
      {
        path: "articles",
        name: "articles",
        component: ArticleList
      },
      {
        path: "contacts",
        name: "contacts",
        component: ContactsList,
        meta: { title: "联系人列表" }
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
