import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Touchable} from 'react-native';
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
    <View style={styles.container}>
        <Header/>
        <AddTodo submitHandler={submitHandler}/>
          <View tyle={styles.content}>
          {/* To Do Form */}
            <View style={styles.list}>
              <FlatList data={todo} renderItem={({item})=>(
              <Todo item={item} pressHandler={pressHandler}/>
               
              )}/>
            </View>
          </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
    margin: 0,
    fontSize: 30,
  },

});


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/tagbochinedu/React-Native-To-Do-App.git
git push -u origin main