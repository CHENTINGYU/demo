import React from 'react'
import { View ,SafeAreaView} from 'react-native'
import {Header, } from 'react-native-elements';


type PageConfig = {
    title: string,
}

class NormalPageView extends React.Component {
    constructor(props, pageConfig) {
        super(props)
        this.pageConfig = {...pageConfig}
        console.log('this.pageConfig', this.pageConfig.title)
    }


    renderHeader() {
        return(<Header
            placement="left"
            centerComponent={{ text: this.pageConfig.title, style: { color: '#fff' } }}
          />)
    }

    renderContent() {

    }
    render() {
      return (
        <View style={{flex:1,backgroundColor:'#F5F5F5'}}>
            {this.renderHeader()}
            <SafeAreaView style={{flex:1,backgroundColor:'#F5F5F5'}}>
                {this.renderContent()}
            </SafeAreaView>
           
        </View>
      );
    }
  }
  
  export default NormalPageView