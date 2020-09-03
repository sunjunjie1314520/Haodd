<template>
    <view class="alert">
        <view class="layout">
            <text class="title">{{config.title}}</text>
            <text class="desc">{{config.desc}}</text>
            <view class="btn-wrap">
                <text @tap="select" :data-index="index" v-for="(item, index) in config.btn" :key="index">{{item.text}}</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props:{
        config:{
            type:Object,
        }
    },
    methods:{
        select(e){
            const { index } = e.currentTarget.dataset
			// console.log(index);
            switch (parseInt(index)) {
                case 0:
                    this.$emit('cancel')
                    break;
                case 1:
                    this.$emit('ok')
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .alert
        position fixed
        left 0
        right 0
        bottom 0
        top 0
        background rgba(#000,.5)
        z-index 99
        .layout
            background #fff
            border-radius 10upx
            width 568upx
            // height 315upx
            position absolute
            left 50%
            margin-left -284upx
            top 50%
            margin-top -157upx
            .title
                display block
                text-align center
                padding-top 36upx
                font-size 32upx
            .desc
                display block
                text-align center
                padding 32upx 61upx 0
                font-size 28upx
                line-height 1.6
                min-height 159upx
                padding-bottom 20upx
            .btn-wrap
                display flex
                justify-content center
                border-top .5px solid #eeeeee
                text
                    flex 1 1 auto
                    line-height 80upx
                    font-size 28upx
                    text-align center
                    color #282828
                    &:nth-child(2)
                        color #20bf6a
                        border-left .5px solid #eeeeee

</style>