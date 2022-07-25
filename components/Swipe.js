import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, ListItem, Button } from '@rneui/themed'


// utilise une fonctin callback en argument pour supprimer
const Swipe = ({ tache, id, suppCallBack }) => {
  return (
    <View>
      <View>
        <ListItem.Swipeable
            rightContent={(reset) => (
              <Button style={styles.button}
                title="Supprimer"
                onPress={() => suppCallBack(id)}
                icon={{ name: 'delete', color: 'white' }}
                buttonStyle={{ minHeight: '100%', backgroundColor: '#52C4C1' }}
              />
            )}
        >
          
          <View style={styles.item}>

          
            <Icon name="favorite" />
            <ListItem.Content >
              <ListItem.Title style={{color: 'blue'}}>{tache}</ListItem.Title>
            </ListItem.Content>
            </View>
          </ListItem.Swipeable>
          </View>
    </View>
  )
}

export default Swipe

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'yellow',
    flex: 1,
    padding:5,
    borderRadius: 10,
    borderWidth: 2
  },
  button: {
    
  }
})