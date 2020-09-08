<template>
	<view class="app" :style="{'height': windowHeight + 'px'}">
        <view class="invitation">
            <div class="container1">
                <div class="customer">
                    <div class="content">
                        <div class="customer-bg">
                            <image src="../../src/static/img/80d389_572x329.png" mode=""></image>
                        </div>
                        <div class="col">
                            <div class="label">
                                <div class="name">
                                        我是经济商
                                </div>
                        <!--        <div class="time">
                                    永久权益
                                </div> -->
                            </div>
                            <div class="text">
                                <div class="tit">
                                    我的广告分红收益
                                </div>
                                <div class="number">
                                    ￥{{pageData.log_amount}}
                                </div>
                            </div>
                            <div class="yesterday">
                                <div class="tit">
                                    当日分红收益
                                </div>
                                <div class="num">
                                    ￥{{pageData.today_amount}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="settlement">
                    <div class="title">
                        每日结算
                    </div>
                    <div class="list">
                        <div class="item">
                            <div class="text fl">
                                <div class="label">
                                    我的经济商团队
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="text fl">
                                <div class="label">
                                    直属经纪商
                                </div>
                                <div class="txt">
                                    获得新手卷轴奖励一个=值13音豆
                                </div>
                            </div>
                            <div class="number fr">
                                 人数：{{pageData.chid_count}}
                            </div>
                        </div>
                        <div class="item">
                            <div class="text fl">
                                <div class="label">
                                    团队经纪商
                                </div>
                                <div class="txt">
                                    获得团队经济商每日总广告分红的 <text>5%</text>
                                </div>
                            </div>
                            <div class="number fr">
                                 人数：{{pageData.team_count}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button1">
					<text class="primary" @click="transfer">转让经纪商</text>
                </div>
            </div>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				page: 1,
				pageData: false,
			}
		},
		created() {
			this.getNetData();
		},
		methods: {
			getNetData(){
				let data = {
					page: this.page
				}
				this.$api.personal.me_partner(data)
				.then(res=>{
					console.log(res);
					this.pageData = res.data
				})
			},
			transfer(){
				this.toast('转让成功', 'success')
			}
		}
	}
</script>

<style>

</style>
