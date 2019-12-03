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
    console.log('counter', this.props.HomeStore.counter)
    return(
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center' }}>
         <Text>{this.props.HomeStore.counter}</Text>
         <Button title="去详情" onPress={()=>{
           console.log(111111)
          //  console.log('this.props.navigation', this.props.navigation.state)
           this.props.navigation.push('Details')
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