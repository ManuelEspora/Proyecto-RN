import { Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import React, { Component } from 'react'
//import ImagenPerfil from './ImagenPerfil'
import {auth, db} from '../firebase/config';

export default class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password:'',
            fotoDePerfil:'',
            nombredeusuario: '',
            biografia: '',
            registrado:false
            }
        }

    registrarUsuario(nombredeusuario, email, password, biografia){
        auth.createUserWithEmailAndPassword(email, password)
        .then(()=> {                
            return(
                db.collection('users').add({
                    email:email,
                    nombredeusuario:nombredeusuario,
                    biografia:biografia,
                    createdAt:Date.now()
                    })
                )}
                )}

    actualizarStateFotoDePerfil(url){
        this.setState({fotoDePerfil: url})
    }

    render() {
        return (
            <View>
                {
                    <>
                    <Text style={styles.titulo2}>Formulario de registro</Text>
                        <TextInput
                        style={styles.input}
                        placeholder='Escribe su correo electronico'
                        keyboardType='email-address'
                        onChangeText={text => this.setState({email: text}) }
                        value={this.state.email}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Escribe tu password'
                        keyboardType='default'
                        onChangeText={text => this.setState({password: text})}
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Digita tu nombre de usuario'
                        onChangeText={text => this.setState({nombredeusuario: text})}
                        value={this.state.nombredeusuario}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Describe una mini bio'
                        onChangeText={text => this.setState({biografia: text})}
                        value={this.state.biografia}
                    />
                    <View>
                    <TouchableOpacity onPress={()=> this.registrarUsuario(this.state.username, this.state.email, this.state.password, this.state.biografia)}>
                    <Text style={styles.buttons}>Registrarme</Text>
                </TouchableOpacity>
                    </View>
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
    titulo2:{
        fontStyle:'italic',
        fontWeight: 500,
        fontSize: 20,
        textAlign: 'center',
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