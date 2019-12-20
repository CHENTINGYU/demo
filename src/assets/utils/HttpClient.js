import axios from 'axios'

function send ( url, method, data) {
		let result = new Promise(function (resolve, reject) {
			let _startTime = new Date().getTime()
			console.log(`[HTTP ${method}]`,url, 'data:', data)
				axios({
					method: method,
					url: url,
					data: data
				}).then(function(response) {
					let responseBody = response
					console.log('[HTTP RESPONSE]',url,(new Date().getTime() - _startTime) + '毫秒', response, 'data:', responseBody)
					resolve(responseBody)
				}).catch(function(error) {
					// console.log('error', error)
					reject(error)
				});
			})
		// console.log('result===>', result)
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