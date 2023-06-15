import { Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import React, { Component } from 'react'
//import ImagenPerfil from './ImagenPerfil'
import {auth, db} from '../firebase/config'

export default class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            inputMail: '',
            inputPassword:'',
            fotoDePerfil:'',
            nombredeusuario: '',
            biografia: '',
            registrado:false
            }
        }

    registrarusuario(email, password){
        auth.createUserWithEmailAndPassword(email, password)
        .then (data => {
              db.collection('users').add({
                owner: auth.currentUser.email,
                createdAt: Date.now(),
            })
            .then(resp => this.setState({registrado: true}))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    actualizarStateFotoDePerfil(url){
        this.setState({fotoDePerfil: url})
    }

    render() {
        return (
            <View>
                {
                    this.state.registrado ?
                    <ImagenPerfil actualizador={(url)=> this.actualizarStateFotoDePerfil(url)}/>
                    :
                    <>
                        <TextInput
                        style={styles.input}
                        placeholder='Escribe su correo electronico'
                        keyboardType='email-address'
                        onChangeText={(text)=> this.setState({email: text}) }
                        value={this.state.email}
                    />
                        <TextInput
                        style={styles.input}
                        placeholder='Digita tu password'
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Digita tu nombre de usuario'
                        onChangeText={(text) => this.setState({nombredeusuario: text})}
                        value={this.state.nombredeusuario}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Describe una mini bio'
                        onChangeText={(text) => this.setState({biografia: text})}
                        value={this.state.biografia}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={()=> 
                            this.registrarUsuario(
                                this.state.inputMail, 
                                this.state.inputPassword, 
                                this.state.inputNombredeUsuario, 
                                this.state.inputMiniBio
                                )}
                        >
                            <Text style={styles.btnText}>Registrar mi usuario</Text>
                        </TouchableOpacity>
                        </>
                    }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor: '#3d3d3d',
        marginTop: 24,
        height:24,
        padding:5
    },
    btn:{
        marginTop:32,
        backgroundColor: '#54d0e0',
        padding: 10,
        borderRadius:20,
    },
    btnText:{
        textAlign:'center',
        fontWeight:'bold',
        color:'white'
    }
})