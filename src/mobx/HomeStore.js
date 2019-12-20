import {observable, action} from "mobx";
import HomeResource from '../resource/HomeResource'
//对象
class demo  {
    @observable user = {
        name: '陈婷玉',
        age: 25,
    }

    @action setAge(age) { 
        this.user.age = age + 1
    }
    
    @action login(id) {
        let data = {
            id: 101,
            name:'陈婷玉',
            age:25
        }
        HomeResource.register(data).then(response => {
            console.log('请求成功', response.status)
        })
    }

}


//state值
// class demo {
//     @observable age = 0
//     @action setAge(age) {
//         this.age = age + 1;
//     }
// }
HomeStore = new demo()

export default HomeStore