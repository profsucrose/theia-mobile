import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/HomeScreen'
import TodoScreen from './src/screens/TodoScreen'

const navigator = createStackNavigator(
  {
	Home: HomeScreen,
	Todo: TodoScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Theia'
    }
  }
)

export default createAppContainer(navigator)
