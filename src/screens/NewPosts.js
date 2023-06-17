import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import FormularioPost from '../components/FormularioPost'
import { db, auth } from '../firebase/config'
import Camera from '../components/Camera'

class NewPosts extends Component {
    constructor(props){
        super(props)
        this.state = {
            descripcion: '',
            foto:'',
            likes:[],
            comments:[]
        }
    }

    actualizarDescripcion(text){
        this.setState({
            descripcion: text
        })
    }

    actualizarEstadoFoto(url){
        this.setState({
            foto: url
        })
    }

    crearPosteo({descripcion,  likes, comments}){
        db.collection('posts').add({
            owner: auth.currentUser.email,
            descripcion: descripcion,
            foto: this.state.foto,
            likes: likes,
            comments: comments,
            createdAt: Date.now(),
        })
        .then((resp)=>{
            this.props.navigation.navigate('Home')
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
        <View style={styles.container}>
            {
                this.state.foto === '' ?
                <Camera
                    actualizarEstadoFoto={
                        (urlFoto)=> this.actualizarEstadoFoto(urlFoto)
                    }
                />
                :
                <>
                    <FormularioPost stateDescripcion={this.state.descripcion} actualizarDescripcion={(text) => this.actualizarDescripcion(text) } />
                    <TouchableOpacity
                        onPress={()=> this.crearPosteo({
                            descripcion:this.state.descripcion,
                            foto: this.state.foto,
                            likes: this.state.likes,
                            comments:this.state.comments
                        })}
                    >
                        <Text>Enviar posteo</Text>
                    </TouchableOpacity>
                </>
                
            }
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default NewPosts