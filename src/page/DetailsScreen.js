import React from 'react'
import { View,Text,Image,Button } from 'react-native'
import { Avatar } from 'react-native-elements';


class DetailsScreen extends React.Component {
  static navigationOptions = {
      title: '详情',
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>今天是个晴朗的日子！</Text>
          {/* <Avatar
            rounded
            source={{
              uri:
                'https://upload.jianshu.io/users/upload_avatars/9134822/c6d83e10-cd26-4859-9a9c-b2091eecd900.png?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp',
            }}
          /> */}
          <Button
            title="去自我介绍"
            onPress={() => {
              console.log('去介绍')
              this.props.navigation.push('User')
            }}
          />
        </View>
      );
    }
  }
  
  export default DetailsScreen