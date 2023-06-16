import React, { Component } from 'react'
import { Text, View, TouchableOpacity} from 'react-native'
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
        <View>
          <FormRegister navigation={this.props.navigation}/>
          <Text>
            Ya tenes una cuenta?
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text> Ingrega aquí</Text>
            </TouchableOpacity>
          </Text>
        </View>
      )
    }
}

export default Register