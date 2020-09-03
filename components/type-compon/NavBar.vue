<template>
    <view class="shrink">
        <view class="uni-nav-bar">
            <view class="status-height"></view>
            <view class="type-nav-bar">
                <navigator v-if="back" :delta="delta" class="icon-return" open-type="navigateBack"></navigator>
                <view class="title">
                    <text v-if="title">{{title}}</text>
                    <text v-else><slot></slot></text>
                </view>
                <view class="fr">
                    <slot name="right"></slot>
                </view>
            </view>
        </view>
        <view class="null-nav-bar">
            
        </view>
    </view>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        },
        back:{
            type:Boolean,
            default:true
        },
		delta:{
		    type:Number,
		    default:1
		}
    }
}
</script>

<style lang="stylus" scoped>       
    .status-height
        height var(--status-bar-height)
        position relative
        z-index 1
        background #fff

    .null-nav-bar
        height 100upx
        padding-top var(--status-bar-height)
        box-sizing content-box
        
    .uni-nav-bar
        background #fff
        position fixed
        left 0
        right 0
        top 0
        z-index 98
    
    .type-nav-bar
        height 100upx
        text-align center
        position relative
        background #fff
        navigator
            position absolute
            left 0
            top 0
        .title
            height 100%
            display flex
            align-items center
            justify-content center
            flex-direction column
            text
                font-size 36upx
        .fr
            position absolute
            top 0
            right 25upx
            height 100%
            display flex
            align-items center
</style>