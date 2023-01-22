import {useState} from 'react'
import {StyleSheet, View, Text} from 'react-native';

const Sandbox = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.boxOne}>
           one
        </Text>
        <Text style={styles.boxTwo}>
           two
        </Text>
        <Text style={styles.boxThree}>
           three
        </Text>
        <Text style={styles.boxFour}>
           four
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 40,
        backgroundColor: '#333'
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        backgroundColor: 'coral',
        padding: 10,
    },
    boxThree: {
        backgroundColor: 'gold',
        padding: 10,
    },
    boxFour: {
        backgroundColor: 'tan',
        padding: 10,
    },
})

export default Sandbox