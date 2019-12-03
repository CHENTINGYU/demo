
import { createStackNavigator } from 'react-navigation-stack';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import  HomeScreen from '../page/HomeScreen'
import  DetailsScreen from '../page/DetailsScreen'
import  UseScreen from '../page/UseScreen'


const TransitionConfiguration = (transitionProps, prevTransitionProps, isModal) => ({
  screenInterpolator: StackViewStyleInterpolator.forHorizontal,
})

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    User:UseScreen
  },
  {
    headerMode: 'none',
    transitionConfig: TransitionConfiguration,
  })
export default  HomeStack
