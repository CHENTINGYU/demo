import React from 'react'
import {Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import NormalPageView from '../component/NormalPageView'
import {connect} from "react-redux"
class HomeScreen extends NormalPageView<Props>{
  static pageConfig = {
    title : "首页"
  }
  constructor(props) {
    super(props,HomeScreen.pageConfig)
  }

  renderContent(){
    console.log('this.props', this.props)
    return(
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.a}</Text>
         <Button title="增加" onPress={()=>{
           this.props.add()
         }}></Button>
      </View>
     
    )
  }
}

export default connect(
  ({homeReducer}) => {
      return {
        a: homeReducer.a,
      }
  }, 
  (dispatch) => {return {
    add(){
      dispatch({"type" : "ADD"});
     }
  }}
)(HomeScreen)