<template>
    <view class="alert1">

        <!-- 正常 -->
        <view class="passwords" v-if="auth">
            <view class="alert-password">
                <view class="alert-error-close" @tap="close"></view>
                <view class="alert-password-title">
                    <text class="tit">安全验证</text>
                    <text>请输入支付密码</text>
                </view>
                <view class="alert-password-input">
                    <view class="password-input-col">
                        <text :class="{'active':number_arr[0]}"></text>
                        <text :class="{'active':number_arr[1]}"></text>
                        <text :class="{'active':number_arr[2]}"></text>
                        <text :class="{'active':number_arr[3]}"></text>
                        <text :class="{'active':number_arr[4]}"></text>
                        <text :class="{'active':number_arr[5]}"></text>
                    </view>
                </view>
                <view class="alert-password-forget">
                    <text @tap="goToforPass">忘记密码？</text>
                </view>
            </view>
            <view class="alert-keyboard">
                <view class="alert-keyboard-box" id="1" @tap="keyDown">
                    <view class="alert-keyboard-number">
                        1
                    </view>
                </view>
                <view class="alert-keyboard-box" id="2" @tap="keyDown">
                    <view class="alert-keyboard-number">
                        2
                    </view>
                    <!-- <view class="alert-keyboard-en">
                        <text>A</text>
                        <text>B</text>
                        <text>C</text>
                    </view> -->
                </view>
                <view class="alert-keyboard-box" id="3" @tap="keyDown">
                    <view class="alert-keyboard-number">
                        3
                    </view>
                    <!-- <view class="alert-keyboard-en">
                        <text>D</text>
                        <text>E</text>
                        <text>F</text>
                    </view> -->
                </view>
                <view class="alert-keyboard-box" id="4" @tap="keyDown">
                    <view class="alert-keyboard-number">
                        4
                    </view>
                    <!-- <view class="alert-keyboard-en">
                        <text>G</text>
                        <text>H</text>
                        <text>I</text>
                    </view> -->
                </view>
                <view class="alert-keyboard-box" id="5" @tap="keyDown">
                    <view class="alert-keyboard-number">
                        5
                    </view>
                    <!-- <view class="alert-keyboard-en">
                        <text>J</text>
                        <text>K</text>
                        <text>L</text>
                    </view> -->
                </view>
                <view class="alert-keyboard-box" id="6" @tap="keyDown">
                    <view class="alert-keyboard-number">
                        6
                    </view>
                    <!-- <view class="alert-keyboard-en">
                        <text>M</text>
                        <text>N</text>
                        <text>O</text>
                    </view> -->
                </view>
                <view class="alert-keyboard-box" id="7" @tap="keyDown">
                    <view class="alert-keyboard-number">
                        7
                    </view>
                    <!-- <view class="alert-keyboard-en">
                        <text>P</text>
                        <text>Q</text>
                        <text>R</text>
                        <text>S</text>
                    </view> -->
                </view>
                <view class="alert-keyboard-box" id="8" @tap="keyDown">
                    <view class="alert-keyboard-number">
                        8
                    </view>
                    <!-- <view class="alert-keyboard-en">
                        <text>T</text>
                        <text>U</text>
                        <text>V</text>
                    </view> -->
                </view>
                <view class="alert-keyboard-box" id="9" @tap="keyDown">
                    <view class="alert-keyboard-number">
                        9
                    </view>
                    <!-- <view class="alert-keyboard-en">
                        <text>W</text>
                        <text>X</text>
                        <text>Y</text>
                        <text>Z</text>
                    </view> -->
                </view>
                <view class="alert-keyboard-box">
                    <view class="alert-keyboard-null">

                    </view>
                </view>
                <view class="alert-keyboard-box" id="0" @tap="keyDown">
                    <view class="alert-keyboard-number">
                        0
                    </view>
                    <!-- <view class="alert-keyboard-en">
                        
                    </view> -->
                </view>
                <view class="alert-keyboard-box" @tap="BackSpace">
                    <view class="alert-keyboard-del"></view>
                </view>
            </view>

        </view>

        <!-- 错误 -->
        <view class="alert-error" v-else>
            <view class="alert-error-close" @tap="close"></view>
            <view class="alert-error-txt">
                支付密码错误，请重试
            </view>
            <view class="alert-error-button">
                <text class="forgot" @tap="Paypassword">忘记密码</text>
                <text class="retry" @tap="resetShi">重试</text>
            </view>
        </view>


    </view>
</template>

<script>
    
    export default {
        name:'alert',
        data(){
            return {
                number_arr:[],
                auth:true
            }
        },
        computed:{
            code(){
                return this.number_arr.join('')
            },
            show(){
                this.number_arr = []
                this.auth = true
                return true
            }
        },
        methods:{
            close(){
                this.$emit('close', false)
            },
            resetShi(){
                this.$assist.play()
                this.number_arr = []
                this.auth = true
            },
            keyDown(e){

                const { id } = e.currentTarget

                if(this.number_arr.length <= 5){
                    this.number_arr.push(id)
                }
                if(this.number_arr.length==6){
                    uni.showLoading({
                        title:'验证中',
                        mask:true
                    })
					this.$emit('confirm', this.number_arr.join(''))
                }
            },
            BackSpace(){
                this.$assist.play()
                var a = this.number_arr
                var c = a.splice(a.length -1 ,1)
            },
            Paypassword(){
                
            },
            goToforPass(){
				this.close();
                uni.navigateTo({
                	url: '../user/settrans'
                })
            }
        }
    }

</script>