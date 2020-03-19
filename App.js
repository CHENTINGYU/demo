import React, {Component} from 'react';
import {StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from "redux";
import reducers from './src/reducer/Reducers'
const store = createStore(reducers)

{/*兼容刘海屏 */}
{/* <StatusBar  backgroundColor='#2089dc'></StatusBar>   */}
import StackNavigatorComponent from './src/router/StackNavigatorComponent'
 
export default class App extends Component{
  render(){
    return(
    <Provider store={store}>
         <StackNavigatorComponent/>
    </Provider>
    )
  }
}