<template>
  <div id="app">
    <!-- <AddBlog></AddBlog>
    <ShowBlog></ShowBlog> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog.vue";
import ShowBlog from "./components/ShowBlog.vue";
import BlogHeader from "./components/BlogHeader.vue";

export default {
  name: "App",
  components: {
    AddBlog,
    ShowBlog,
    BlogHeader
  },
};
</script>

<style>
</style>
