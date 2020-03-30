import React from 'react'
import { View, FlatList, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'

const TodoList = ({ todos, setTodoList }) => {
	return (
		<View style={styles.container}>
			<View style={styles.listContainer}>
				{todos.length  
					? <FlatList 
						style={styles.list}
						data={todos}
						keyExtractor={({ index }) => index}
						renderItem={({ item, index }) => (
							<TouchableOpacity key={index} onPress={() => setTodoList(todos.filter((_, i) => i !== index))} style={styles.itemContainer}>
								<View style={styles.circle}></View>
								<Text key={index} style={styles.item}>{item}</Text>
							</TouchableOpacity>
						)}
					/>
					: <Text style={{...styles.item, width: 300}}>Nice job, you finished everything!</Text>}
			</View>
			<TextInput placeholder="New Task" style={styles.search} />
		</View>
		
	)
}

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: 260,
		height: 50
	},
	circle: {
		width: 15,
		height: 15,
		backgroundColor: 'white',
		borderRadius: 100
	},
	listContainer: {
		backgroundColor: '#1B1A1F',
		padding: 15,
		borderRadius: 15
	},
	container: {
		alignContent: 'flex-start',
		width: 340,
		backgroundColor: '#90DCB0',
		padding: 15,
		borderRadius: 15
	},
	list: {
		marginLeft: 15
	},
	item: {
		fontFamily: 'AvenirNext-UltraLight',
		fontSize: 25,
		marginVertical: 5,
		color: 'white',
		width: 200
	}
})

export default TodoList