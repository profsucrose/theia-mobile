import React, { useEffect } from 'react'
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native'

const FoodLogScreen = ({ navigation }) => {
    return (
        <View>
            <Image source={require('../../assets/logScreen.png')} style={styles.screen} />
			<TouchableOpacity 
				style={styles.button}
				onPress={() => navigation.navigate('Food Details')}
			/>
		</View>
    )
}

const styles = StyleSheet.create({
	button: {
		width: 50,
		height: 50,
		position: 'absolute',
		left: 320,
		top: 200
	},
	screen: {
		width: '100%',
		height: '100%'
	}
})

export default FoodLogScreen
