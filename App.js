import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/HomeScreen'
import TodoScreen from './src/screens/TodoScreen'
import MealsPlannerScreen from './src/screens/FoodLogScreen'
import SleepSchedulerScreen from './src/screens/SleepScreen'

const navigator = createStackNavigator(
  {
	Home: HomeScreen,
	Todo: TodoScreen,
	MealPlanner: MealsPlannerScreen,
	SleepScheduler: SleepSchedulerScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Theia'
    }
  }
)

export default createAppContainer(navigator)
