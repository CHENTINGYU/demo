import {observable, action} from "mobx";
import axios from 'axios'
//对象
class demo  {
    @observable user = {
        name: '陈婷玉',
        age: 25,
    }
    
    @action setAge(age) { 
        // this.user.age = age + 1
        axios.get('www.baidu.com').then(function(res) {
            console.log(res)
        }).catch(function(err) {
            console.log(err)
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