<template>
    <view class="uni-loadding-wrap">
        <view class="uni-loadding">
            <image class="uni-loadding-image" src="@/static/image/load.gif" mode=""></image>
            <!-- <span class="p">正在玩命加载中...</span> -->
        </view>
    </view>
</template>

<script>
    export default {
        name: 'loadding',
        props: {
            more:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .uni-loadding-wrap
        float left
        width 100%
        text-align center
        display flex
        justify-content center
        align-items center
        height 100%
        position absolute
        left 0
        right 0
        bottom 0
        top 0
        df 1
        justify-content center
        .title
            color #999
        .uni-loadding
            text-align center
            image
                width 130upx
                height 130upx
            .p
                display block
                font-size 26upx
                color #c2c8cf
                margin 10upx auto 0
</style>
