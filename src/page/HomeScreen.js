import React from 'react'
import {Text,Image,StyleSheet, View} from 'react-native'
import {Button} from 'react-native-elements'
import NormalPageView from '../component/NormalPageView'
import {observer, inject} from 'mobx-react';
@inject('HomeStore')
@observer
class HomeScreen extends NormalPageView<Props>{
  static pageConfig = {
    title : "首页"
  }
  constructor(props) {
    super(props,HomeScreen.pageConfig)
  }

  renderContent(){
   
    let {HomeStore} = this.props
    return(
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center' }}>
         <Text>{HomeStore.user.age}</Text>
         <Button title="增加" onPress={()=>{
          //  this.props.navigation.push('Details')
          HomeStore.login(66)
         }}></Button>
      </View>
     
    )
  }
}

const styles = StyleSheet.create({
  tabBarIcon:{
    width:24,height:24
  }
});

export default HomeScreen