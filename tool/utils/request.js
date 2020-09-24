import url_config, { qiniu } from '@/tool/common/config.js'

const request = {}

request.globalRequest = (url, method, data, power, loading) => {
    const headers = {}
    if (typeof(loading) == "string") {
        uni.showLoading({
            title: loading,
            mask: true
        })
    }
    switch (power){
        case 1:
            const token = uni.getStorageSync('token');
			if (token) {
				headers['x2-token'] = token;
			}
            break;
        default:
            break;
    }
    return uni.request({
		url: url_config + url,
		method,
		data: JSON.stringify(data),
		dataType: 'json',
		header: headers
	})
	.then(res => {
        if (loading) {
            uni.hideLoading()
        }
		if(res[0]){
            throw { statusCode : 500 }
		}else if (res[1].statusCode == 200) {
            if (res[1].data.code === 0){
                uni.showToast({
                	title: res[1].data.msg || '',
					icon: 'none',
                })
            }
			/*这里写判断*/
			
			
			return res[1].data
        } 
		else{
			throw res[1]
        }
    })
    .catch(parmas => {
        if (loading) {
            uni.hideLoading()
        }
        switch (parmas.statusCode) {
		    case 401:
				uni.clearStorageSync()
　　　　　　　　　break
		    case 404:
				uni.showToast({
				    title: '404 : No Found',
				    icon: 'none'
                })
                break
            case 500:
                uni.showToast({
                    title: '网络接口数据异常',
                    icon: 'none'
                })
　　　　　　 default:
                return Promise.reject()
        }
　　})
}

request.globalChooseImage = (url, power, sourceType, token) => {
    const headers = {}
	switch (power){
	    case 1:
	        const token = uni.getStorageSync('token');
	        if (token) {
	            headers['token'] = token
	        } else {
	            headers['token'] = '...'
	        }
	        break;
	    default:
	        headers['token'] = 'Need to log in'
	        break;
	}
    return new Promise((resolve, reject) => {
        uni.chooseImage({
            count: 9,
            sourceType: sourceType,
            success: (chooseImageRes) => {
                
                const tempFilePaths = chooseImageRes.tempFilePaths;
                var group = []
                tempFilePaths.forEach(item=>{
                    var p = new Promise(resolve => {
                        uni.uploadFile({
                            url: qiniu + url,
                            filePath: item,
                            name: 'file',
							formData: {
								'token': token,
							},
                            header: headers,
                            success: (uploadFileRes) => {
                                let data = JSON.parse(uploadFileRes.data)
                                resolve(data)
                            },
                            fail: function(error) {
                                console.log(error);
                                reject(error)
                            }
                        });
                    })
                    group.push(p)                   
                })
                Promise.all(group)
                .then(res => {
                    // console.log(res);
                    var key = []
                    res.forEach(item=>{
                        key.push(item.key)
                    })
					
                    uni.hideLoading()
                    
                    resolve(key)
                })
            },
            error:function(){
                console.log('select imgage error ~~~');
                uni.hideLoading()
            }
        });
    });
}

request.globalChooseVideo = (url, data, power, token) => {
    const headers = {}
	switch (power){
	    case 1:
	        const token = uni.getStorageSync('token');
			if (token) {
				headers['x2-token'] = token;
			}
	        break;
	    default:
	        break;
	}
	return new Promise((resolve, reject) => {
		uni.chooseVideo({
			count: 1,
			sourceType: data,
			maxDuration: 30,
			success:function(res){
				uni.showLoading({
					title: '上传中'
				})
				uni.uploadFile({
				    url: qiniu + url,
				    filePath: res.tempFilePath,
				    name: 'file',
					formData: { 
						'token': token,
					},
				    header: headers,
				    success: (uploadFileRes) => {
				        let data = JSON.parse(uploadFileRes.data);
						uni.hideLoading();
				        resolve(data);
				    },
				    fail: function(error) {
				        console.log(error);
				        reject(error);
				    }
				});
			}
		})
	})
}


export default request
