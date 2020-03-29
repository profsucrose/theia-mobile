import React, { useState } from 'react'
import { Text, StyleSheet, View, Button, FlatList, TextInput, TouchableOpacity, Image } from 'react-native'

const MealsListScreen = ({ navigation }) => {
	const [ mealsList, setMealsList ] = useState([
		{ image: require('../../assets/hamburger.png'), name: 'Breakfast' },
		{ image: require('../../assets/hamburger2.jpeg'), name: 'Elevenses' },
		{ image: require('../../assets/hamburger3.png'), name: 'Lunch' },
		{ image: require('../../assets/hamburger4.jpeg'), name: 'Dinner' },
		{ image: require('../../assets/hamburger5.png'), name: 'Midnight Snack (Very Healthy)' }
	])  

    return (
        <View>
            <Text style={styles.title}>Food Log</Text>
			{ mealsList.length == 0 && <Text style={styles.mealName}>You ate all your meals you fat pig! Good job!</Text> }
			<FlatList 
				data={mealsList}
				keyExtractor={({ index }) => index}
				renderItem={({item, index}) => {
					return (
						<TouchableOpacity 
							key={index}
							onPress={() => {
								console.log(index)
								setMealsList([  ...mealsList.filter(((_, i) => i !== index)) ])
							}}
						>
							<View style={{flexDirection:"row", margin: 10}}>
								<View style={{flex:1}}>
									<Image 
										style={styles.image}
										title={item.name}
										source={item.image}
									/>
								</View>
								<View style={{flex:1, justifyContent: 'center'}}>
									<Text style={styles.mealName}>{item.name}</Text>
								</View>
							</View>
						</TouchableOpacity>
					)
				}}
			/>
        </View>
    )
}

const styles = StyleSheet.create({
	image: {
		width: 130,
		height: 130
	},
	mealName: {
		fontSize: 25,
		textAlign: 'left'
	},
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1
	},
    title: {
        fontSize: 30,
    }
})

export default MealsListScreen
