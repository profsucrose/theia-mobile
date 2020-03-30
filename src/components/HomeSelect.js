import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const HomeSelect = ({ navigation, height, width, image, name, link, color, alignment }) => {
	return (
		<View style={{...styles.container, alignSelf: alignment}}>
			<TouchableOpacity onPress={() => navigation.navigate(link)}>
				<View style={{ ...styles.button, borderColor: color }}>
					<Image style={{...styles.icon, width, height}} source={image} />
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 0
	},
	button: {
		borderRadius: 100,
		width: 90,
		height: 90,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 8,
		padding: 10
	},
	icon: {
		width: 50,
		height: 50,
		resizeMode: 'contain'
	},
	text: {
		fontFamily: 'AvenirNext-Medium',
		fontSize: 20,
		marginTop: 10
	},
	
})

export default HomeSelect