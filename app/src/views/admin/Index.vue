<template>
  <div class="container">
    <el-container>
      <el-header>
        <div class="logo">
          <h1 class="title">
            <router-link to="/admin/welcome/">后台管理系统</router-link>
          </h1>
        </div>
        <div class="header-right">
          <el-dropdown>
            <div class="el-dropdown-link center">
              <div class="info">
                你好
              </div>
              <i class="icon-exit"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span class="menu-link">个人信息</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <span>注销</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside v-bind:class="{ collapsed: isCollapse }">
          <div class="menu-action">
            <i
              class="el-icon-s-unfold"
              v-if="isCollapse"
              @click="handleMenu"
            ></i>
            <i class="el-icon-s-fold" v-else @click="handleMenu"></i>
          </div>
          <el-menu
            :default-active="defaultActiveMenu"
            :collapse="isCollapse"
            background-color="#2A2F46"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened="true"
            @open="openSubMenu"
            ref="menu"
          >
            <el-menu-item index="0">
              <i class="el-icon-s-home"></i>
              <router-link class="menu-link" to="/"
                >首页</router-link
              ></el-menu-item
            >

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>类别管理</span>
              </template>
              <el-menu-item index="1-1"
                ><router-link class="menu-link" to="/admin/category"
                  >类别列表</router-link
                ></el-menu-item
              >
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>标签管理</span>
              </template>
              <el-menu-item index="2-1"
                ><router-link class="menu-link" to="/admin/tags"
                  >标签列表</router-link
                ></el-menu-item
              >
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item index="3-1"
                ><router-link class="menu-link" to="/admin/article/list"
                  >文章列表</router-link
                ></el-menu-item
              >
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-notebook-1"></i>
                <span>通迅录</span>
              </template>
              <el-menu-item index="3-1"
                ><router-link class="menu-link" to="/admin/contacts"
                  >联系人列表</router-link
                ></el-menu-item
              >
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-postcard"></i>
                <span>卡片管理</span>
              </template>
              <el-menu-item index="3-1"
                ><router-link class="menu-link" to="/admin/card"
                  >卡片列表</router-link
                ></el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import "@/assets/css/reset.scss";

export default {
  created() {},
  watch: {
    $route(to) {
      this.defaultActiveMenu = to.meta.activeMenu || "2";
    }
  },
  methods: {
    handleMenu() {
      this.isCollapse = !this.isCollapse;
    },
    openSubMenu(index) {
      this.$router.push(
        this.$refs["menu"].submenus[index].$children[0].$children[0].to
      );
    }
  },
  data() {
    return {
      defaultActiveMenu: "2",
      isCollapse: false
    };
  }
};
</script>
