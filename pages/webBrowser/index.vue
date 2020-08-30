<template>
    <view class="container bg-one">
        <web-view class="web-view" :webview-styles="webviewStyles" :src="url"></web-view>
    </view>
</template>

<script>
export default {
    data() {
        return {
			index: 0,
            webviewStyles: {
                progress: {
                    color: '#0084FF'
                }
            },
            url:''
        }
    },
    onLoad(params){
        console.log(params);
        this.url = params.url
    },
    computed:{
        
    },
    methods: {
        clickReturn(){
            uni.navigateBack() 
        },
    }
}
</script>

<style scoped>
    
</style>