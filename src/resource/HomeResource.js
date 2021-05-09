import Config from '../../Config'
import HttpClient from '../assets/utils/HttpClient'

export default class HomeResource{
    static login (data) {
      return  HttpClient.Get(Config.baseUrl, data)
    }

    static register (data) {
        return  HttpClient.Post(Config.baseUrl, data)
    }
}

