import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import FormRegister from '../components/FormRegister'
import { auth } from '../firebase/config';

class Register extends Component {

    componentDidMount(){
      auth.onAuthStateChanged( user => {
        if(user) {
            this.props.navigation.navigate('HomeNav')
        }
      } 
      )
    }

    render(){
      return (
        <View style={styles.view}>
          <FormRegister navigation={this.props.navigation}/>
          <Text>
            Ya tenes una cuenta?
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.buttons}> Ingrega aquí</Text>
            </TouchableOpacity>
          </Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
    view:{
      backgroundColor: 'lightblue'
    },
    buttons:{
      marginTop:32,
      borderWidth:2,
      borderColor: 'green',
      backgroundColor: 'white',
      padding: 10,
      borderRadius:20,
      textAlign:'center',
  }
})

export default Register