import React from 'react'
import {Text,Image,StyleSheet} from 'react-native'
import NormalPageView from '../component/NormalPageView'

class SettingsScreen extends NormalPageView<Props>{
  static pageConfig = {
    title : "我的"
  }
  constructor(props) {
    super(props,SettingsScreen.pageConfig)
  }
  renderContent(){
    return(
      <Text>我的</Text>
    )
  }
}
const styles = StyleSheet.create({
  tabBarIcon:{
    width:24,height:24
  }
});
export default SettingsScreen