import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Touchable} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        
        height: 90,
        paddingTop:38,
        backgroundColor: 'coral',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }

})

export default Header