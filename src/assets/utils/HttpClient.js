import axios from 'axios'
axios.defaults.timeout = 10 //设置超时时间

// 判断是否存在token，如果存在的话，则每个http header都加上token
axios.interceptors.request.use(config => {
		config.headers = {
			...config.headers,
			retry:4,
			retryDelay:1000
		}
		// if (true) {  
		// 	// config.headers.Authorization = `token ${store.state.token}`;
		// }
		return config
    },
		err => {return Promise.reject(err)}
);
 
// 响应拦截
axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
	const { config, message } = err
  //没有网络
	if (message == 'Network Error' || !navigator.onLine) {
		return Promise.reject({status: '-1', error: '请求失败，请检查网络'})
	}
	//网络超时
	if(message.includes('timeout')){ 
		return Promise.reject({status: '-2', error: '网络超时，请稍后再试'})
	}

	//axios处理请求超时重新请求
	if(!config || !config.headers || !config.headers.retry) return Promise.reject(err);	
	config.headers.__retryCount = config.headers.__retryCount || 0

  if(config.headers.__retryCount >= config.headers.retry) {
    return Promise.reject({status: '-3', error: '网络超时，请稍后再试'})
	}
	config.headers.__retryCount += 1
  var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, config.headers.retryDelay || 1)
    })
    return backoff.then(function() {
        return axios(config)
    })
})


function send ( url, method, data) {
	let result = new Promise(function (resolve, reject) {
		if (method === 'get') {  //如果是get拼接字符串
			for (let item in data) {
				url += '?' +  encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
			}
		}
		url = url.slice(0, url.length - 1)
		console.log(`[HTTP ${method}]`,url, 'data:', data)
		axios({
			method: method,
			url: url,
			data: data,
		}).then(response => {
			console.log('response===>', response)
			if (response.status == 200) {
				resolve(response.data)
			} else {
				reject(response)
			}
		}).catch(error => {
		
			reject(error)
		})
	})
	return result
}

export default class HttpClient {
    static Get(url , data,){
        console.log('get_Data', data)
        return send(url , 'get', data)
    }
    static Post(url ,data,){
        console.log('post_Data', data)
        return send(url , 'post', JSON.stringify(data))
    }
}