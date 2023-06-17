import { Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import React, { Component } from 'react'
//import ImagenPerfil from './ImagenPerfil'
import {db, auth} from '../firebase/config';

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
        .then( data => {                
            return(
                db.collection('users').add({
                    owner:auth.currentUser.email,
                    createdAt: Date.now(),
                    })
                )}
                )}

    actualizarStateFotoDePerfil(url){
        this.setState({fotoDePerfil: url})
    }

    render() {
        return (
            <View style={styles.container}>
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
                        placeholder='Escribe tu nombre de usuario'
                        onChangeText={text => this.setState({nombredeusuario: text})}
                        value={this.state.nombredeusuario}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Describe una biografía para tu usuario'
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
    container:{
        flex: 1,
        justifyContent:'center',
        paddingHorizontal:300,
        backgroundColor: 'lightblue',
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
    buttons:{
        marginTop:32,
        borderWidth:2,
        borderColor: 'green',
        backgroundColor: 'white',
        padding: 10,
        borderRadius:20,
        textAlign:'center',
    },
    btnText:{
        textAlign:'center',
        fontWeight:'bold',
        color:'white'
    }
})