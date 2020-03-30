import React, { useState } from 'react'
import { Text, StyleSheet, View, Button, Image, SafeAreaView } from 'react-native'
import HomeSelect from '../components/HomeSelect'
import TodoList from '../components/TodoList'
import { LinearGradient } from 'expo-linear-gradient'

const MusicScreen = () => {
    return (
		<View>
			<LinearGradient
				colors={['#9B51E0', '#BB6BD9', 'white']}
				style={{ height: '140%', width: '100%' }}>
					<Image source={require('../../assets/icons/music.png')} style={styles.musicNotes} />
					<Image source={require('../../assets/icons/clouds.png')} style={styles.cloud} />
					<Text style={styles.title}>Music</Text>
					<View>
						<Text style={styles.header}>Last Played</Text>
					</View>
			</LinearGradient>
      	</View>
    )
}

const styles = StyleSheet.create({
	title: {
		fontSize: 60,
		fontFamily: 'AvenirNext-DemiBold',
		color: 'white',
		top: 60,
		left: 30
	},
	musicNotes: {
		width: 110,
		height: 110,
		resizeMode: 'contain',
		position: 'absolute',
		top: 10,
		right: 120
	},
	cloud: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
		right: -60,
		position: 'absolute'
	}
})

export default MusicScreen
