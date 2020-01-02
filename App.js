import React, {Component} from 'react';
import {StatusBar} from 'react-native'

{/*兼容刘海屏 */}
{/* <StatusBar  backgroundColor='#2089dc'></StatusBar>   */}
import StackNavigatorComponent from './src/router/StackNavigatorComponent'
 
export default class App extends Component{
  render(){
    return(
    <StackNavigatorComponent/>
    )
  }
}