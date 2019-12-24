let ConfigUrl = {
    dev: {
        baseUrl: 'http://www.weibo.com'
    },
    test: {
        baseUrl: 'http://www.weibo.com'
    }
}

let defaultUrl = 'dev'
let Config = ConfigUrl[defaultUrl]
export default Config

