<template>
    <view class="footer-wrap">
        <view class="null-footer"></view>
        <view class="footer">
            <view class="ul">
                <view @tap="selectTabs" data-index="1" :class="['li',{'active':index=='1'}]">
                    <text class="ico ico-i1"></text>
                    <text class="s">首页</text>
                </view>
                <view @tap="selectTabs" data-index="2" :class="['li',{'active':index=='2'}]">
                    <text class="ico ico-i2"></text>
                    <text class="s">社区</text>
                </view>
                <view @tap="threeSelectTabs" class="li three">
                    <text class="ico ico-i3"></text>
                    <text class="s">发布</text>
                </view>
                <view @tap="selectTabs" data-index="3" :class="['li',{'active':index=='3'}]">
                    <text class="ico ico-i4"></text>
                    <text class="s">消息</text>
                    <text class="count" v-if="count > 0">{{count}}</text>
                </view>
                <view @tap="selectTabs" data-index="4" :class="['li',{'active':index=='4'}]">
                    <text class="ico ico-i5"></text>
                    <text class="s">我的</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import { mapState } from 'vuex'
    import {  } from '@/tool/common/constants.js'
    export default {
        name:'uni-footer',
        props:{
            index:{
                type:Number,
                default: 1
            }
        },
        data(){
            return {
                
            }
        },
        computed: {
            ...mapState('Message', {
                count: state => {
                    var data = state.getMessageRooms
                    var count = 0
                    if(data){
                        data.forEach(item=>{
                            count += item.unread_count
                        })
                    }
                    return count
                }
            })
        },
        onLoad(){

        },
        methods:{
            selectTabs(e){
                const { index } = e.currentTarget.dataset
                this.$emit('tabChange',parseInt(index))
            },
            threeSelectTabs(){
                this.$emit('three')
            }
        }
    }
</script>

<style>

</style>