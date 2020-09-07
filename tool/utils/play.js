let assist = {}

// 播放音频
assist.play = function () {
    const innerAudioContext = uni.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.src = '../../static/video/click.mp3';
    innerAudioContext.onPlay(() => {
        setTimeout(() => {
            innerAudioContext.destroy()
        }, 1000)
    });
    innerAudioContext.onError((res) => {
        console.log(res.errMsg);
        console.log(res.errCode);
    });
}

assist.loginMusic = function () {
    const innerAudioContext = uni.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    innerAudioContext.src = '../../static/video/login.mp3';
    innerAudioContext.onPlay(() => {
        setTimeout(() => {
            innerAudioContext.destroy()
        }, 3000)
    });
    innerAudioContext.onError((res) => {
        console.log(res.errMsg);
        console.log(res.errCode);
    });
}

// 登录验证
assist.authLogin = function(_this) {
    try {
        const user = uni.getStorageSync('user');
        console.log(user);
        if (user) {
            uni.redirectTo({
                url: '../pages/index/index'
            })
        }
    } catch (e) {

    }
}

// 手机号验证
assist.validatePhoneNumber = function(str) {
    const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    return reg.test(str)
}

// 时间戳 格式化 日期
assist.formatTime = function (number, format) {

    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];

    var date = new Date(number * 1000);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));

    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));

    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}

// 表单验证
assist.ver = function (yz) {
	var status = true;
	try{
		yz.forEach(item => {
			switch (item.type) {
				case 'phone':
					if (item.val != "") {
						if (!assist.validatePhoneNumber(item.val)) {
							uni.showToast({
								title: '手机号格式错误!',
								icon: 'none'
							})
							throw Error();
						}
					} else {
						uni.showToast({
							title: '手机号不能为空',
							icon: 'none'
						})
						throw Error();
					}
					break;
				case 'null':
					if (item.val === "") {
						uni.showToast({
							title: '请输入' + item.field,
							icon: 'none'
						})
						throw Error();
					}
					break;
				case 'password':
					if(item.val1 == ''){
						uni.showToast({
							title: item.field + '不能为空',
							icon: 'none'
						})
						throw Error();
					}else if (item.val2 == '') {
						uni.showToast({
							title: '确认' + item.field + '不能为空',
							icon: 'none'
						})
						throw Error();
					} else if(item.val1.length < item.min || item.val2.length < item.min){
						uni.showToast({
							title: item.field + '不能少于' + item.min + '位数',
							icon: 'none'
						})
						throw Error();
					}else if(item.val2 != item.val1){
						uni.showToast({
							title: '两次密码不一样',
							icon: 'none'
						})
						throw Error();
					}
					break;
				case 'len':
					if (item.val === "") {
						uni.showToast({
							title: item.field + '不能为空',
							icon: 'none'
						})
						throw Error();
					}else if(item.val.length < item.min) {
						uni.showToast({
							title: item.field + '不能少于' + item.min + '位数',
							icon: 'none'
						})
						throw Error();
					}
					break;
				default:
					break;
			}
		})

	}catch(e){
		//TODO handle the exception
		status = false
	}
	return status
}

// 提示消息
assist.msg = function (res, message, isReturn = false) {
    if (res.code === 1) {
        if (message) {
			setTimeout(()=>{
				toast(res.msg || message, 'success')
			}, 200)
		}
        if (isReturn) {
            setTimeout(function () {
                uni.navigateBack()
            }, 1500);
        }
        return true
    } else {
        toast(res.msg)
        return false
    }
}

assist.testParams = function(_this){
	for (var item in _this.formData){
		console.log('%c%s','color:#20bf6a',`${item}: ${_this.formData[item] || 'Null'}`);
	}
	
}

assist.clearForm = function(_this){
	for (var item in _this.formData){
		var type = typeof(_this.formData[item])
		console.log(type);
		switch (type){
			case 'function':
					_this.formData[item] = [];
					break;
			case 'number':
					_this.formData[item] = 1;
					break;
			default:
				_this.formData[item] = ''
		}
	}
}

assist.prePage = function(){
	let pages = getCurrentPages()
    let prevPage = pages[pages.length - 2]
    // #ifdef H5
    return prevPage;
    // #endif
    return prevPage.$vm;
}

// 数据01格式
function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

// 轻提示
function toast(title, icon = 'none') {
    uni.showToast({
        title: title,
        icon: icon,
    })
}


export default assist