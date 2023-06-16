import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { auth } from '../firebase/config';

class FormLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    loguear(mail, password){
        auth.signInWithEmailAndPassword(mail, password)
        .then(resp => this.props.navigation.navigate('HomeNav'))
        .catch(err => console.log(err))
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Inicia Sesión</Text>        
        <TextInput 
            style={styles.input}
            placeholder='Ingresa tu email'
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={(text)=> this.setState({email: text})}
            
        />
        <TextInput
            style={styles.input}
            placeholder='Ingresa tu password'
            keyboardType='default'
            value={this.state.password}
            onChangeText={(text)=> this.setState({password: text})}
            
            secureTextEntry={true}
        />
        <TouchableOpacity
            onPress={() => this.loguear(this.state.email, this.state.password)}
            style={styles.buttons}
        >
            <Text>Ingresar</Text>

        </TouchableOpacity>
        <View>
          <br></br>
            <Text style={styles.titulo2}>
              Si aún no tienes una cuenta
            </Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')}>
              <Text style={styles.buttons}>Registrate</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
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
titulo:{
    fontStyle:'italic',
    fontWeight: 500,
    fontSize: 20,
    textAlign: 'center',
  },
  titulo2:{
    fontStyle:'italic',
    fontWeight: 500,
    fontSize: 15,
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
})

export default FormLogin