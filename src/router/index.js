// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import AddBlog from '../components/AddBlog.vue'
import ShowBlog from '../components/ShowBlog.vue'
import SingleBlog from '../components/SingleBlog.vue'
import EditBlog from '../components/EditBlog.vue'

export default new VueRouter({
	routes:[
    {
			path:'/add',
			component:AddBlog
		},
		{
			path:'/show',
			component:ShowBlog
		},
		{
			path:'/blog/:id',
			component:SingleBlog
		},
		{
			path:'/edit/:id',
			component:EditBlog
		}
	]
})