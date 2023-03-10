import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AddTodo from './Components/AddTodo';

import Header from './Components/Header';
import Todo from './Components/Todo';

export default function App() {
  const [todo, setTodo] = useState([
  {text: 'buy coffee', key: '1'},
  {text: 'create an app', key: '2'},
  {text: 'play on the switch', key: '3'}
  ])

  const pressHandler =(key)=>{
setTodo((prevtodo)=>(prevtodo.filter((todos)=>(todos.key!==key))))
  }
  const submitHandler = (newtodo) => {
    setTodo((prevtodo)=> [newtodo, ...prevtodo])
  }

 

  
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View style={styles.container}>
        <Header/>
          <View style={styles.content}>
          {/* To Do Form */}
          <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList data={todo} renderItem={({item})=>(
              <Todo item={item} pressHandler={pressHandler}/>
               
              )}/>
            </View>
          </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingTop: 45,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    margin: 0,
    fontSize: 30,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }

});