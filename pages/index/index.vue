<template>
	<view class="app">
		<Home v-if="tabs==0"></Home>
		<Shop v-if="tabs==1"></Shop>
		<Task v-if="tabs==3"></Task>
		<Center v-if="tabs==4"></Center>
		
		<Footer @change="toggle"></Footer>
		
	</view>
</template>

<script>
	import Footer from './Footer.vue'
	import Home from './Home.vue'
	import Shop from './Shop.vue'
	import Task from './Task.vue'
	import Center from './Center.vue'
	export default {
		components: {
			Footer,
			Home,
			Shop,
			Center,
			Task,
		},
		data() {
			return {
				tabs: 4,
			}
		},
		onLoad() {

		},
		methods: {
			toggle(id){
				this.tabs = id
			}
		}
	}
</script>

<style>
	
</style>
