import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Todo = ({item,pressHandler}) => {
  return (
        <TouchableOpacity 
        onPress={()=>{pressHandler(item.key)}}>
        <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
    item: {
      padding: 20,
      margin: 10,
      borderWidth: 1,
      borderColor: '#bbb',
      borderRadius: 10,
      fontSize: 20,
    },
  
  });
export default Todo