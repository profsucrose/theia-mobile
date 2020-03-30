import React, { useEffect } from 'react'
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native'

const FoodDetailScreen = () => {
    return (
        <View>
            <Image source={require('../../assets/breakfastScreen.png')} style={styles.screen} />
		</View>
    )
}

const styles = StyleSheet.create({
	screen: {
		width: '100%',
		height: '102%',
		marginTop: -10
	}
})

export default FoodDetailScreen
