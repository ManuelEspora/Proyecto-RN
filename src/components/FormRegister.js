import { Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import React, { Component } from 'react'
import {auth, db} from '../firebase/config'

export default class FormRegister extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputMail: '',
            inputPassword:'',
            inputNombredeUsuario: '',
            inputMiniBio: ''
        }
    }

    registrarusuario(mail, password,  ){
        auth.createUserWithEmailAndPassword(mail, password)
        .then( data => {
            this.props.navigation.navigate('HomeNav')
            db.collection('users').add({
                owner:auth.currentUser.email,
                createdAt: Date.now()
            })
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
     
    render() {
        return (
          <View>
            <TextInput
                style={styles.input}
                placeholder='Digita su correo electronico'
                keyboardType='email-address'
                onChangeText={(text)=> this.setState({inputMail: text}) }
                value={this.state.inputMail}
            />
            <TextInput
                style={styles.input}
                placeholder='Digita tu password'
                onChangeText={(text) => this.setState({inputPassword: text})}
                value={this.state.inputPassword}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder='Digita tu nombre de usuario'
                onChangeText={(text) => this.setState({inputNombredeUsuario: text})}
                value={this.state.inputNombredeUsuario}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder='Describe una mini bio'
                onChangeText={(text) => this.setState({inputMiniBio: text})}
                value={this.state.inputMiniBio}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.btn}
                onPress={()=> this.registrarUsuario(this.state.inputMail, this.state.inputPassword, this.state.inputNombredeUsuario, this.state.inputMiniBio)}
            >
                <Text style={styles.btnText}>Registrar mi usuario</Text>
            </TouchableOpacity>
          </View>
        )
      }
}
