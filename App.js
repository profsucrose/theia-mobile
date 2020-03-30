import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/screens/HomeScreen'
import ExerciseScreen from './src/screens/ExerciseScreen'
import MeditationScreen from './src/screens/MeditationScreen'
import FoodLogScreen from './src/screens/FoodLogScreen'
import MusicScreen from './src/screens/MusicScreen'
import FoodLogDetailsScreen from './src/screens/FoodDetailScreen'

import YogaScreen from './src/screens/exerciseScreens/YogaScreen'
import CardioScreen from './src/screens/exerciseScreens/CardioScreen'

const Stack = createStackNavigator()

// options={{ headerShown: false }} to hide header

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
				<Stack.Screen name="Exercise" component={ExerciseScreen} />
				<Stack.Screen name="Meditation" component={MeditationScreen} />
				<Stack.Screen name="Music" component={MusicScreen} />
				<Stack.Screen name="Food Details" component={FoodLogDetailsScreen} />
				{ /* Exercise screens */ }
				<Stack.Screen name="Yoga" component={YogaScreen} />
				<Stack.Screen name="Cardio" component={CardioScreen} />
				<Stack.Screen name="Food Log" component={FoodLogScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
