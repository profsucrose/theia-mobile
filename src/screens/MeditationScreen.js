import React, { useEffect } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

const MeditationScreen = () => {
    return (
        <View>
            <Image source={require('../../assets/meditationScreen.png')} style={{ width: '100%', height: '100%' }} />
		</View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})

export default MeditationScreen
