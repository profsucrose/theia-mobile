import React, { useState } from 'react'
import { Text, StyleSheet, View, Button, FlatList, TextInput } from 'react-native'

const TodoScreen = ({ navigation }) => {
	const [ todoList, setTodoList ] = useState([])  

    return (
        <View>
            <Text style={styles.text}>Todo List</Text>
			<TextInput 
				onSubmitEditing={() => setTodoList([...todoList, "Task"])}
			/>
			<FlatList 
				data={todoList}
				keyExtractor={({ index }) => index}
				renderItem={({item}) => {
					return (
						<Text>{item}</Text>
					)
				}}
			/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
})

export default TodoScreen
