import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const ExerciseSelect = ({ navigation, image, name, link }) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate(link)}>
			<View style={styles.viewStyle}>
				<Image source={image} style={styles.iconStyle} />
				<Text style={styles.textStyle}>{name}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	viewStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10
	},
	iconStyle: {
		width: 70,
		height: 70,
		resizeMode: 'contain'
	},
	textStyle: {
		textAlign: 'left',
		fontSize: 25,
		flex: 1,
		padding: 10
	}
})

export default ExerciseSelect