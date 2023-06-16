import { Text, View, FlatList, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import ComentariosForm from '../components/ComentariosForm'
import { db } from '../firebase/config';

class Comments extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        db.collection('posts')
        .doc(this.props.route.params.id)
        .onSnapshot(doc => {
            this.setState({
                data:doc.data()
            }, ()=> console.log(this.state.data))
        })
    }
  render() {
    return (
      <View>
        <Text style={styles.titulo}>Comentarios</Text>
         <FlatList 
            style = {styles.comentario}
            data={this.state.data.comments}
            keyExtractor={item => item.createdAt.toString()}
            renderItem={({item}) => 
            <View>
            <Text style={styles.owner}>{item.owner}: {item.comentario}</Text>
            </View>
            }
        />
        <ComentariosForm idPost={this.props.route.params.id} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titulo:{
    fontStyle:'italic',
        fontWeight: 500,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'lightblue'
  },
  comentario: {
    backgroundColor: 'lightblue'
  }
})

export default Comments