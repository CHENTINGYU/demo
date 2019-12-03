import React, {Component} from 'react';
import {StatusBar} from 'react-native'
import {Provider} from 'mobx-react'
import stores from './src/mobx/index'
 
import StackNavigatorComponent from './src/router/StackNavigatorComponent'
 
export default class App extends Component{
  render(){
    return(
      <Provider {...stores}>
        {/*兼容刘海屏 */}
          {/* <StatusBar  backgroundColor='#2089dc'></StatusBar>   */}
          <StackNavigatorComponent/>
      </Provider>
    )
  }
}