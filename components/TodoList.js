import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Input, Icon, ListItem, Button, SpeedDial} from '@rneui/themed';

import Swipe from './Swipe';

import DialogInput from 'react-native-dialog-input';

const initTask = [];

const TodoList = () => {
  //detection de l'ajout d'un element dans initTask
  const [getTask, setTask] = useState(initTask);

  // detetction du changement de l'input
  const [getText, setText] = useState('');

  // mise a jour de la valeur du text
  const textChange = textValue => {
    // console.log('textchange', textValue);
    setText(textValue);
  };

  // ajouter un element saisi
  const ajouter = textValue => {
    if (textValue != '') {
      // console.log(textValue);

      setTask([{id: getTask.length + 1, tache: textValue}, ...getTask]);
      // remise a zero du formulaire input
      setText('');
    } else {
      // console.log("saisie vide")
      alert('vide');
    }

    setOpenDialogue(!openDialogue);
  };

  //supprimer une tache dans initTask
  const supprimer = id => {
    console.log('supprimer', id);

    // filtre initTask en retirant la tache selectionne en gardant les donnees restantes dans filterTask
    const filterTask = getTask.filter(item => item.id != id);

    console.log(filterTask);

    // changement de iniTask par filterTask
    setTask(filterTask);
  };

  const [open, setOpen] = React.useState(false);

  const [openDialogue, setOpenDialogue] = useState(false);

  return (
    <View>
      <SafeAreaView>
        <FlatList style={styles.flatList}
          ListEmptyComponent={() => (
            <View style={styles.pageListeVide}>
              <View style={styles.iconListeVide}>
                <Icon name="fact-check" color="white" size={300}/>
              </View>
            </View>
          )}
          data={getTask}
          renderItem={({item}) => (
            <Swipe tache={item.tache} id={item.id} suppCallBack={supprimer} />
          )}
          ListHeaderComponent={
            <View style={styles.header}>
              <View style={styles.headerView}>
                <Text  style={styles.headerText}>TODO LIST</Text>
              </View>
            </View>
          }
        />

        <DialogInput
          isDialogVisible={openDialogue}
          title={"Ajout d'une tache"}
          message={'Saisir une tâche'}
          hintInput={'...............'}
          submitInput={inputText => {
            ajouter(inputText);
          }}
          closeDialog={() => setOpenDialogue(!openDialogue)}></DialogInput>

        <SpeedDial
          isOpen={open}
          icon={{name: 'edit', color: '#fff'}}
          openIcon={{name: 'close', color: '#fff'}}
          onOpen={() => setOpenDialogue(!open)}
          onClose={() => setOpen(!open)}
          style={{height: 750}}>
          <SpeedDial.Action
            icon={{name: 'add', color: '#fff'}}
            title="Add"
            onPress={() => setOpenDialogue(!openDialogue)}
          />
        </SpeedDial>
      </SafeAreaView>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  flatList: {
   
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10
  },
  header: {
    backgroundColor: '#52C4C1',
    marginBottom: 20
  },

  pageListeVide: {
    flex:1,
    backgroundColor: '#52C4C1',
    padding: 25,
    height: 673,
    justifyContent: 'center'
  },
  
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  headerView: {
    alignItems: 'center',

    backgroundColor: '#2AD3B4',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
});
