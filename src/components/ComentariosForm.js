import { Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'
import firebase from 'firebase'

export default class CommentsForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            comentario:''
        }
    }

    crearComentario(comentario){
        db.collection('posts')
        .doc(this.props.idPost)
        .update({
            comments: firebase.firestore.FieldValue.arrayUnion({
                owner: auth.currentUser.email,
                createdAt: Date.now(),
                comentario: comentario
            })
        })
    }

  render() {
    return (
      <View style = {styles.view}>
        <TextInput
        keyboardType='default'
        style = {styles.input}
        onChangeText={text => this.setState({comentario: text})}
        value={this.state.comentario}
        placeholder='Comentar'
        />
        <br></br>
        <TouchableOpacity
        onPress={()=> this.crearComentario(this.state.comentario)}
        >
            <Text style = {styles.titulo2}>Enviar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    view:{
        backgroundColor: 'lightblue'
    },
    input:{
        borderWidth:2,
        borderColor: 'green',
        marginTop: 24,
        height:30,
        padding:5,
        backgroundColor: 'white'
    },
    titulo2:{
        fontStyle:'italic',
        fontWeight: 500,
        fontSize: 20,
        textAlign: 'center',
      },
})