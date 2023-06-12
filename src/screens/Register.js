import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { auth, db } from '../firebase/config'

class Register extends Component {

    constructor(){
      super()
      this.state ={
        email: '',
        password:'',
        nombredeusuario: '',
        biografia: ''
        }
    }

    registrarusuario(email, password, nombredeusuario, biografia){
      auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
          return(
            db.collection('users').add({
              email: email, 
              nombredeusuario: nombredeusuario,
              biografia:biografia,
              createdAt:Date.now()           
          }))
          .then(resp => this.props.navigation.navigate('Home'))
          .catch(err => console.log(err))
      })
  }
    
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titulo}>Formulario de Registro</Text>
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
          onPress={()=> this.registrarUsuario(this.state.inputMail, this.state.inputPassword, this.state.inputNombredeUsuario, this.state.inputMiniBio)}
      >
      <Text style={styles.btnText}>Registrar mi usuario</Text>
      </TouchableOpacity>
      <View>
          <Text>Ya tienes un cuenta?</Text>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Login')}>
              <Text style={styles.buttons}>Logueate</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      paddingHorizontal:250,
      backgroundColor: 'lightgrey',
    },
    titulo:{
      fontStyle:'italic',
      fontWeight: 500,
      fontSize: 20,
      textAlign: 'center',
    },
    input:{
      borderWidth:1,
      padding:8,
    },

  })

export default Register