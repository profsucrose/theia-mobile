import React, { useState } from 'react'
import { Text, StyleSheet, View, Button, FlatList, TextInput, TouchableOpacity } from 'react-native'

const TodoScreen = ({ navigation }) => {
	const [ todoList, setTodoList ] = useState([])  
	const [ inputValue, setInputValue ] = useState('')

    return (
        <View>
            <Text style={styles.title}>Todo List</Text>
			<TextInput 
				autoCapitalize="characters"
				autoCorrect={false}
				style={styles.input}
				keyExtractor={(index) => index}
				onChangeText={value => setInputValue(value.toUpperCase())}
				value={inputValue}
			/>
			<Button 
				title="Add Task"
				onPress={() => {
					setInputValue('')
					setTodoList([ ...todoList, inputValue ])
				}}
			/>
			<FlatList 
				data={todoList}
				keyExtractor={({ index }) => index}
				renderItem={({item, index}) => {
					return (
						<TouchableOpacity 
							key={index}
							onPress={() => {
								console.log(index)
								setTodoList([  ...todoList.filter(((_, i) => i !== index)) ])
							}}
						>
							<Text>{item}</Text>
						</TouchableOpacity>
					)
				}}
			/>
        </View>
    )
}

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1
	},
    title: {
        fontSize: 30,
    },
})

export default TodoScreen
