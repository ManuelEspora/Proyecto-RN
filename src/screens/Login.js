import { Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import React, { Component } from 'react'
import FormLogin from '../components/FormLogin'

class Login extends Component {
  render() {
    return (
      <View style={styles.view}>
        <FormLogin navigation={this.props.navigation} />
        <Text>
            <TouchableOpacity
                onPress={()=> this.props.navigation.navigate('Register')}
            >
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

export default Login