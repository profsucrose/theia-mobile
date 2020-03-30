import React, { useEffect } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import ExerciseSelect from '../components/ExerciseSelect'

const ExerciseScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Exercise</Text>
			<ExerciseSelect 
				navigation={navigation}	
				image={require('../../assets/yoga.png')}
				name="Yoga"
				link="Yoga"
			/>
			<ExerciseSelect 
				navigation={navigation}
				image={require('../../assets/cardio.png')}
				name="Cardio"
				link="Cardio"
			/>
		</View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})

export default ExerciseScreen
