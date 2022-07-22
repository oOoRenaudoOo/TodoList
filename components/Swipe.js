import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, ListItem, Button } from '@rneui/themed'


// utilise une fonctin callback en argument pour supprimer
const Swipe = ({ tache, id, suppCallBack }) => {
  return (
    <View>
        <ListItem.Swipeable 
            rightContent={(reset) => (
              <Button
                title="Supprimer"
                onPress={() => suppCallBack(id)}
                icon={{ name: 'delete', color: 'white' }}
                buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
              />
            )}
          >

            <Icon name="favorite" />
            <ListItem.Content>
              <ListItem.Title>{tache}</ListItem.Title>
            </ListItem.Content>
          </ListItem.Swipeable>
    </View>
  )
}

export default Swipe

const styles = StyleSheet.create({})