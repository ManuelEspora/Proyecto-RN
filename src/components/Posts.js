import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Post from './Post'

function Posteos(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({ item }) => <Post navigation={props.navigation} data={ item } /> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default Posteos