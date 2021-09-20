<template>
  <div id="show-blog">
    <h1>博客总览</h1>
    <input type="text" placeholder="Search" v-model="search">

    <div class="single-blog" v-theme:column ="'wide'" v-for="blog in filtererBlogs" :key="blog.id">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | toUpperCase}}</h2>
      </router-link>
      <article>
        {{blog.content | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ShowBlog",
  data() {
    return {
      blogs: [],
      search: '',
    };
  },
  computed:{
    filtererBlogs(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search)
      })
    },
  },
  filters: {
    toUpperCase(value){
      return value.toUpperCase()
    },
    snippet(value){
      return value.slice(0,100) + '...'
    }
  },
  directives: {
    'rainbow': {
      bind(e,binding,vnode){
        e.style.color = '#' + Math.random().toString(16).slice(2,8)
      }
    }
  },
  created(){
    axios.get('/posts.json')
      .then((data)=>{
        return data.data
      })
      .then((data)=>{
        var blogsArray = []
        for(let k in data){
          data[k].id = k
          blogsArray.push(data[k])
        }
      this.blogs = blogsArray
      })
      
  }
};
</script>

<style scoped>
#show-blog{
  max-width: 800px;
  margin: 0 auto;
}

.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #fff;
  border:1px dotted #aaa;
}

#show-blog a{
  color: #444;
  text-decoration: none
  ;
}

input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>