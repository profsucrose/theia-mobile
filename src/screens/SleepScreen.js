import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const SleepScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Sleep Scheduler</Text>
			<Text>Go to sleep you piece of absolute trash garbage and set an alarm while you're at it</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})

export default SleepScreen
