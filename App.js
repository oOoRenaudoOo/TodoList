import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <View style={{backgroundColor: '#52C4C1'}}>
      <TodoList></TodoList>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#52C4C1'
  }
})