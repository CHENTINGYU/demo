let ConfigUrl = {
    dev: {
        baseUrl: 'http://www.jianshu.com'
    },
    test: {
        baseUrl: 'https://www.jianshu.com'
    }
}

let defaultUrl = 'dev'
let Config = ConfigUrl[defaultUrl]
export default Config

