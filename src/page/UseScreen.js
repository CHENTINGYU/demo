import React from 'react'
import { View,Text } from 'react-native'
import {Button} from 'react-native-elements'
// import Button from 'antd-mobile-rn/lib/button'


class UseScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>我是陈婷玉！</Text>
          {/* <Button
            onPress={() => {
            console.log('引入成功')
          }}
          type="primary">ant-design</Button> */}
           <Button
            title="回去"
            onPress={() => {
              console.log('回去')
              this.props.navigation.goBack()
            }}
          />
        </View>
      );
    }
  }
  
  export default UseScreen