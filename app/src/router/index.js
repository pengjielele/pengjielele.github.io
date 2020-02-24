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

import NoteIndex from "@/views/note/Index.vue";

import AdminIndex from "@/views/admin/Index.vue";
import Welcome from "@/views/admin/Welcome.vue";

import CategoryList from "@/views/admin/category/Index.vue";

import ArticleIndex from "@/views/admin/article/Index.vue";
import ArticleList from "@/views/admin/article/List.vue";
import ArticleAdd from "@/views/admin/article/Update.vue";

import TagList from "@/views/admin/tag/Index.vue";
import ContactsList from "@/views/admin/contacts/Index.vue";
import CardList from "@/views/admin/card/Index.vue";

import UserIndex from "@/views/user/Index.vue";
import UserLogin from "@/views/user/Login.vue";
import UserRegister from "@/views/user/Register.vue";
import UserResetPwd from "@/views/user/ResetPwd.vue";
import UserFindPwd from "@/views/user/FindPwd.vue";

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
    path: "/note",
    name: "noteIndex",
    component: NoteIndex
  },
  {
    path: "/admin",
    name: "adminIndex",
    component: AdminIndex,
    children: [
      {
        path: "welcome",
        name: "welcome",
        component: Welcome,
        meta: { title: "欢迎" }
      },
      {
        path: "tags",
        name: "tags",
        component: TagList,
        meta: { title: "标签列表" }
      },
      {
        path: "category",
        name: "category",
        component: CategoryList,
        meta: { title: "类别列表" }
      },
      {
        path: "article",
        name: "article",
        component: ArticleIndex,
        meta: { title: "文章列表" },
        children: [
          {
            path: "list",
            name: "list",
            component: ArticleList,
            meta: { title: "文章列表" }
          },
          {
            path: "add",
            name: "add",
            component: ArticleAdd,
            meta: { title: "新建文章" }
          },
          {
            path: "edit/:id",
            name: "edit",
            component: ArticleAdd,
            meta: { title: "编辑文章" }
          }
        ]
      },
      {
        path: "contacts",
        name: "contacts",
        component: ContactsList,
        meta: { title: "联系人列表" }
      },
      {
        path: "card",
        name: "card",
        component: CardList,
        meta: { title: "卡片列表" }
      }
    ]
  },
  {
    path: "/user",
    name: "user",
    component: UserIndex,
    children: [
      {
        path: "login",
        name: "login",
        component: UserLogin
      },
      {
        path: "register",
        name: "register",
        component: UserRegister
      },
      {
        path: "resetpwd",
        name: "resetpwd",
        component: UserResetPwd
      },
      {
        path: "findpwd",
        name: "findpwd",
        component: UserFindPwd
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
