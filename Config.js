let ConfigUrl = {
    dev: {
        baseUrl: 'http://www.baidu.com'
    },
    test: {
        baseUrl: 'http://www.baidu.com'
    }
}

let defaultUrl = 'dev'
let Config = ConfigUrl[defaultUrl]
export default Config

