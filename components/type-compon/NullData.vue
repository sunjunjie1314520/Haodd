<template>
    <view :class="['uni-no-data', {'short': short}]">
        <text>没有任何数据~</text>
    </view>
</template>

<script>
    export default {
        name: 'uni-null-data',
        props: {
            short: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="stylus">
    .uni-no-data
        text-align center
        padding 200upx 0
        float left
        width 100%
        &.short
            padding 80upx 0
        text
            color #999
            display block
</style>
