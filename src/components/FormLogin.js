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
      <View>
        <TextInput
            placeholder='Ingresa tu email'
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={(text)=> this.setState({email: text})}
            style={styles.input}
        />
        <TextInput
            placeholder='Ingresa tu password'
            keyboardType='default'
            value={this.state.password}
            onChangeText={(text)=> this.setState({password: text})}
            style={styles.input}
            secureTextEntry={true}
        />
        <TouchableOpacity
            onPress={() => this.loguear(this.state.email, this.state.password)}
            style={styles.buttons}
        >
            <Text>Ingresar</Text>

        </TouchableOpacity>
        <View>
            <Text>
              Aún no tienes una cuenta?
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
    input:{
        borderWidth:1,
        borderColor:'red',
        marginVertical: 16,
        padding:10
    },
    buttons:{
        backgroundColor:'red',
        padding:16,
        borderRadius:10
    }
})

export default FormLogin