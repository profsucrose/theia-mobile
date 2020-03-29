import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Theia</Text>
			<Button title="Todo List" onPress={() => navigation.navigate('Todo')} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})

export default HomeScreen
