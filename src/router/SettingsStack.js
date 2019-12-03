
import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../page/SettingsScreen'
import {StackViewStyleInterpolator} from 'react-navigation-stack';

const TransitionConfiguration = (transitionProps, prevTransitionProps, isModal) => ({
  screenInterpolator: StackViewStyleInterpolator.forHorizontal,
})
 
const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
  },
  {
    headerMode: 'none',
    transitionConfig: TransitionConfiguration,
  })

export default  SettingsStack