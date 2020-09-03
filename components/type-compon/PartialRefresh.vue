<template>
	<view
    class="loadding-wrapper"
	@touchstart="refreshStart"
	@touchmove="refreshMove"
	@touchend="refreshEnd"
	:style="[{
		transform:`translate3d(0, ${move.move_current}, 0)`,
		transition: move.coverTransition
	}]"
	>
		<view class="loadding-two">
			<view class="wrap">
				<image v-if="move.refreshText == '正在刷新'" src="../../static/img/50c5e_12x32.gif" mode=""></image>
				<image v-else-if="move.refreshText == '刷新完成'" src="../../static/img/e73a1_200x200.png" mode=""></image>
				<image v-else src="../../static/img/0abb9_32x32.png" mode=""></image>
				<text>{{move.refreshText}}</text>
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			scroll_value:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				ismove: true,
				start: false,
				move:{
					start_clientY : 0,
					move_clienY : 0,
					move_current:'0px',
					duration:0,
					refreshText:'',
					coverTransition: '0ms'
				}
			}
		},
		watch: {
			scroll_value(value){
				if(value <= 0){
					this.ismove = true
				}else{
					this.ismove = false
					this.move_current = '0px'
				}
			}
		},
		methods:{
			// 刷新操作
			refreshStart(e){
				if(this.ismove){
					this.move.coverTransition = '0ms'
					const { clientY } = e.changedTouches[0]
					this.move.start_clientY = clientY
					this.move.refreshText = '下拉刷新'
				}
			},
			refreshMove(e){
				if(this.ismove){
					this.start = true
					e.preventDefault()
					const { clientY } = e.changedTouches[0]
					this.move.move_clienY = clientY
					let result = clientY - this.move.start_clientY
					if( result > 0){
						this.move.move_current = result/1.6 + 'px'
					}
					if( result > 150)
					this.move.refreshText = '释放刷新'
				}
			},
			refreshEnd(e){
				if(this.ismove){
					const { clientY } = e.changedTouches[0]
					this.move.coverTransition = '300ms'
					const result = clientY - this.move.start_clientY
					if( result < 150){
						this.move.coverTransition = '150ms'
						this.move.move_current = 0
					}else{
						// 执行刷新
						this.move.move_current = '90px'
						setTimeout(()=>{
							this.move.refreshText = '正在刷新'
						},150)
						setTimeout(()=>{
                            this.$emit('shua')
                            this.move.refreshText = '刷新完成'
                            this.$assist.play()
                            setTimeout(()=>{
								this.move.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)'
								this.move.move_current = 0
								this.start = false
								
                                setTimeout(()=>{
                                    this.move.refreshText = '下拉刷新'
                                }, 500);
                            }, 200);
						},1000)
					}
				}else{
					this.move.coverTransition = '50ms'
					this.move.move_current = 0
				}
			}
		},
		
	}
</script>

<style scoped>
    .loadding-wrapper{
        height: 100%;
		float: left;
		width: 100%;
    }
	.loadding-two {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        margin-top: -50px;
        text-align: center;
    }
    .loadding-two.transparent {
        background: none;
    }
    .loadding-two.transparent .wrap text {
        color: #fff;
        font-size: 26upx;
    }
    .loadding-two .wrap {
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loadding-two .wrap text {
        color: #999;
    }
    .loadding-two .wrap .white {
        color: #fff;
    }
    .loadding-two image {
        width: 32upx;
        height: 32upx;
        margin-right: 10upx;
    }
</style>
