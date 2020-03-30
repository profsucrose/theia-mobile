import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet, View, Button, Image, SafeAreaView } from 'react-native'
import HomeSelect from '../components/HomeSelect'
import TodoList from '../components/TodoList'
import { LinearGradient } from 'expo-linear-gradient'

import { Ionicons } from '@expo/vector-icons'

const MusicScreen = () => {
	console.log('loaded ')
	const [paused, setPaused] = useState(true)
 
    return (
		<View>
			<Image style={{ width: '100%', height: '102%', marginTop: -1 }} source={require('../../assets/musicScreen.png')} />
			<TouchableOpacity style={{ position: 'absolute' }} onPress={() => { console.log(paused); setPaused(false)}}>
				<Image source={require('../../assets/play.png')} style={{...styles.playButton, display: paused ? 'flex' : 'none'}} />
				<Image source={require('../../assets/pause.png')} style={{...styles.playButton, display: !paused ? 'flex' : 'none'}} />
			</TouchableOpacity>
			
      	</View>
    )
}

const styles = StyleSheet.create({
	pauseButton: {
		width: 50,
		height: 50,
		left: 163,
		top: 578,
		position: 'absolute'
	},
	playButton: {
		left: 168,
		top: 575,
		position: 'absolute'
	},
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
