<template>
	<view class="app">
		<Home v-if="tabs==0"></Home>
		<Shop v-if="tabs==1"></Shop>
		<Game v-if="tabs==3"></Game>
		<Center v-if="tabs==4"></Center>
		
		<Footer @change="toggle"></Footer>
		
	</view>
</template>

<script>
	import Footer from './Footer.vue'
	import Home from './Home.vue'
	import Shop from './Shop.vue'
	import Game from './Game.vue'
	import Center from './Center.vue'
	export default {
		components: {
			Footer,
			Home,
			Shop,
			Center,
			Game,
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
