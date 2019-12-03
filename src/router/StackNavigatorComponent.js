import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import React from 'react'
import {Image} from 'react-native'

import HomeStack from './HomeStack'
import SettingsStack from './SettingsStack'

const  stackNavigator = createBottomTabNavigator({
	Home: HomeStack,
	Settings: SettingsStack,
},{
	defaultNavigationOptions:({navigation })=>({
		tabBarIcon:({focused, tintColor}) => getTabBarIcon(navigation, focused, tintColor),
		tabBarLabel: navigation.state.routeName === 'Home' ? '首页' : '我的',
	}),
	tabBarOptions: {
		activeTintColor: '#2089dc',
		labelStyle: {
		  fontSize: 12,
		  marginBottom:10
		},
		style: {
		  backgroundColor: '#ECECEC',
		},
	  }
})



const AppNavigator = createAppContainer(stackNavigator);
export default AppNavigator;

const getTabBarIcon = (navigation, focused, tintColor) => {  
	const { routeName } = navigation.state;
	if (routeName === 'Home') { 
	  return <Image style={{  
		width: 22,
		height: 22
	  }}
		source={focused ? require('../assets/images/home.png') : require('../assets/images/home1.png')} /> 
	} else if (routeName === 'Settings') { 
	  return <Image style={{ 
		width: 22,
		height: 22
	  }}
		source={focused ? require('../assets/images/my.png') : require('../assets/images/my1.png')} /> 
	}
  }

