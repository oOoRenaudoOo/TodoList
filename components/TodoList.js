import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, {useState} from 'react'
import { Input, Icon, ListItem, Button, SpeedDial } from '@rneui/themed'

import Swipe from './Swipe'


const initTask = [

];

const TodoList = () => {
  //detection de l'ajout d'un element dans initTask
  const [getTask, setTask] = useState(initTask)

  // detetction du changement de l'input
  const [getText, setText] = useState ("")

  // mise a jour de la valeur du text
  const textChange = (textValue) => {
    console.log("textchange", textValue)
    setText(textValue)
  }

  // ajouter un element saisi
  const ajouter = () => {

    if (getText != "") {

      console.log(getText)

    setTask([
      
      { id: getTask.length + 1,
        tache: getText
      },
      ... getTask
    ])
    // remise a zero du formulaire input
    setText("")

    }
    else {
      // console.log("saisie vide")
      alert("vide")
    }
  }


  //supprimer une tache dans initTask
  const supprimer = (id) => {

    console.log("supprimer", id)

    // filtre initTask en retirant la tache selectionne en gardant les donnees restantes dans filterTask
    const filterTask = getTask.filter(item => item.id != id)

    console.log(filterTask)

    // changement de iniTask par filterTask
    setTask(filterTask)
  }

  const [open, setOpen] = React.useState(false) 


  return (
    <View>
      <SafeAreaView>
        <FlatList
          ListEmptyComponent = {() => (
            <View style={styles.pageListeVide}>
                <Text style={styles.textListeVide}>Liste vide</Text>
              <View style={styles.IconListeVide}>
                <Icon
                  name="fact-check"
                  color='white' 
                />
              </View>
            </View>
          )}         
          data = { getTask }
          renderItem = { ({item}) => <Swipe tache={item.tache} id={item.id} suppCallBack={supprimer} />}
          ListHeaderComponent = {
            <Input
              placeholder='SAISIR UNE TACHE' 
              onChangeText = { textChange }
              value = { getText }
              rightIcon = {
                <Icon
                  name="chevron-right"
                  onPress = { ajouter }
                />
              }
            />
          }
        />
        <SpeedDial
            isOpen={open}
            icon={{ name: 'edit', color: '#fff' }}
            openIcon={{ name: 'close', color: '#fff' }}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
            style={{height: 750}}
          >
            <SpeedDial.Action
              icon={{ name: 'add', color: '#fff' }}
              title="Add"
              onPress={() => console.log('Add Something')}
            />
            <SpeedDial.Action
              icon={{ name: 'delete', color: '#fff' }}
              title="Delete"
              onPress={() => console.log('Delete Something')}
            />
        </SpeedDial>
      </SafeAreaView>
    </View>
  )
}

export default TodoList


const styles = StyleSheet.create({
  pageListeVide : {
    backgroundColor: "#52C4C1",
    padding: 25,
    margin: 20,
  },

  textListeVide: {
    height: 50,
    lineHeight: 50,
    backgroundColor: '#5CB6DC',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    letterspace: 10
  },

  IconListeVide: {
    flex: 1,
    backgroundColor: 'black'
  },
  
  bottomView : {
    marginTop: 300,

  }
})