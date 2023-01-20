import {useState} from 'react'
import { StyleSheet,View, Text, TextInput, TouchableOpacity} from 'react-native';


const AddTodo = ({submitHandler}) => {
    const [text, setText]=useState('')
    
  return (
   <View style={styles.input}>
        <TextInput 
        style={styles.text}
        value={text}    
        placeholder='new todo...' 
        onChangeText={(val)=>{setText(val)}}
        />
        <TouchableOpacity
        style={styles.button} 
        onPress={()=>
        {submitHandler({text: text, key: Math.random()})
         setText('')
        }}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
       </View>
  )
}

const styles = StyleSheet.create({
    input: {
      padding: 10,
      fontWeight: 'bold',     
    },
    text: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#bbb',
      fontSize: 20,
      marginBottom: 10
    },
    button: {
      backgroundColor: 'coral',
      paddingVertical: 10,
      borderRadius: 5,

    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'

    }
  
  });
  

export default AddTodo