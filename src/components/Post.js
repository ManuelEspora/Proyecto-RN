import { Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config'
import firebase from 'firebase'


class Post extends Component {

    constructor(props){
        super(props)
        this.state={
            isLiked:false
        }
    }

    componentDidMount(){
        let estaMiLike = this.props.data.data.likes.includes(auth.currentUser.email)
        if(estaMiLike === true) {
            this.setState({
                isLiked:true
            })
        }
    }

    like(){
        db.collection('posts')
        .doc(this.props.data.id)
        .update({
            likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then((resp) => {
            this.setState({
                isLiked:true
            })
        })
        .catch(err => console.log(err))
    }

    unlike(){
        db.collection('posts').doc(this.props.data.id)
        .update({
          likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
        .then((resp) => this.setState({
          isLiked:false
        }))
        .catch(err => console.log(err))
      }


      render(){
        return (
            <View>
                <Image
                    source={{uri: this.props.data.data.foto}}
                    style={StyleSheet.img}
                    resizeMode='cover'
                    />
                    
                <Text>{this.props.data.data.descripcion}</Text>
                {
                    this.state.isLiked ?
                    <TouchableOpacity
                    onPress={()=> this.unlike()}
                    >
                        <FontAwesome
                        name='heart'
                        size={22}
                        color='red'
                        />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                    onPress={() => this.like ()}
                    >
                        <FontAwesome
                        name='heart-o'
                        size={22}
                        color='red'
                        />
                      </TouchableOpacity>
                    }
                    <View>
                      <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('Comments', {id: this.props.data.id})}
                      >
                        <Text>Agregar comentario</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
        )
      }
}

const styles  = StyleSheet.create({
    img:{
      height: 220
    }
  })
    
export default Post