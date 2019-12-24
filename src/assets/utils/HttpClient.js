import axios from 'axios'
axios.defaults.timeout = 30000

// 响应拦截

function send ( url, method, data) {
		let result = new Promise(function (resolve, reject) {
			console.log(`[HTTP ${method}]`,url, 'data:', data)
				axios({
					method: method,
					url: url,
					data: data,
					// transformRequest:[ data => {
					// 	let ret = ''
					// 	if (method === 'get') {  //如果是get拼接字符串
					// 		for (let item in data) {
					// 			ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
					// 		}
					// 	}
					// 	return ret
					// }]
				}).then(response => {
					console.log(response)
					if (response.status == 200) {
						resolve(response.data)
					} else {
						reject(response)
					}
				}).catch(error => {
					console.log(error)
					reject(error)
				});
			})
		let timeout = new Promise((resolve, reject) => {
				setTimeout(function () {
					reject({status: 100001, error: '请求超时,请检查网络'});
				}, 3);
			});
		return Promise.race([
			result,
			timeout
		])
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