import React, { useState } from 'react'
import {
    Text,
    StyleSheet,
    View,
    Button,
    Image,
    SafeAreaView,
} from 'react-native'
import HomeSelect from '../components/HomeSelect'
import TodoList from '../components/TodoList'

const HomeScreen = ({ navigation }) => {
    const [todoList, setTodoList] = useState([
        'Meditate',
        'Do 100 Situps',
        'Yoga for 10 ins',
    ])

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/homeLogo.png')}
                />
                <TodoList todos={todoList} setTodoList={setTodoList} />
                <View style={styles.menu}>
                    <HomeSelect
                        color="#3D5678"
                        width={60}
                        height={60}
                        navigation={navigation}
                        image={require('../../assets/icons/meditation.png')}
                        link="Meditation"
                    />
                    <HomeSelect
                        alignment="flex-start"
                        color="#9D53E0"
                        width={50}
                        height={50}
                        navigation={navigation}
                        image={require('../../assets/icons/music.png')}
                        link="Music"
                    />
                    <HomeSelect
                        color="#FF8C04"
                        width={50}
                        height={50}
                        navigation={navigation}
                        image={require('../../assets/icons/foodlog.png')}
                        link="Food Log"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#56CCF2',
        flex: 1,
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        height: 170,
        marginTop: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '40%',
    },
    logo: {
        height: 230,
        width: 230,
        resizeMode: 'contain',
        marginLeft: -40,
    },
    text: {
        fontSize: 30,
        marginBottom: 20,
    },
})

export default HomeScreen
