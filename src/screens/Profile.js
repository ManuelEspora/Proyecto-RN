import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {Component} from 'react'
//import Profiles from '../components/Profiles'
import { auth, db } from '../firebase/config'


class Profile extends Component {
  constructor(props){
    super(props)
    this.state ={
      allPosts: [],
      id: '',
      infoUsuario: {},
    }
  }

  componentDidMount(){
    db.collection('posts')
      .where('owner', '==', auth.currentUser.email)
      .orderBy('createdAt', 'desc')
      .onSnapshot(docs => {
      let posts = []
      docs.forEach(doc => {
        posts.push({
          id: doc.id,
          data: doc.data()
        })
      })

      this.setState({
        allPosts: posts
      }, () => console.log(this.state.allPosts))




    })

    db.collection('users')
      .where('owner', '==', auth.currentUser.email)
      .onSnapshot(doc => {
        doc.forEach(doc =>
          this.setState({
            id: doc.id,
            infoUsuario: doc.data()
          }))
      }), () => console.log(this.state.infoUsuario)



  }

  signOut(){
    auth.signOut()
    this.props.navigation.navigate('Login')
  }
  
  render(){
    return (
      <View style={styles.container}>
        <>
          <div>
            <Text style={styles.titulo}> Hola: {auth.currentUser.email} </Text>
            <li>
              <ul><Text style={styles.titulo1}>Nombre de Usuario:{this.state.infoUsuario.nombredeusuario} </Text></ul>
              <ul><Text style={styles.titulo1}> Biografia: {this.state.infoUsuario.biografia}</Text></ul>
              <ul><Text style={styles.titulo1}> Posteos: {this.state.allPosts.length} </Text> </ul>
              <ul><Text style={styles.titulo1}> Activo desde: {auth.currentUser.metadata.creationTime} </Text> </ul>
            </li>

          </div>

        
        
        
        
        
        </>




      
      <Text>aca van los posteos del usuario</Text>
      <TouchableOpacity onPress={() => this.signOut()}>
        <Text style={styles.buttons}>Cerrar sesión</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profile:{
      fontSize: 50,  
  },
  container:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:320,
    backgroundColor: 'lightblue',
  },
  titulo:{
    fontStyle:'italic',
    fontWeight: 500,
    fontSize: 25,
    textAlign: 'center',
  },
  titulo1:{
    fontStyle:'italic',
    fontWeight: 500,
    fontSize: 15,
  },
  buttons:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:6,
    borderWidth:2,
    padding:8,
    backgroundColor: 'grey',
  },
})


export default Profile





























/*import { View, Text, FlatList  } from 'react-native'
import React, {Component} from 'react'
import Profiles from '../components/Profiles'
import {db} from '../firebase/config'

class Profile extends Component {

  constructor(props){
    super(props)
    this.state = {
      usuarios: [],
      loading: true
    }
  }

  componentDidMount(){
    db.collection('users').onSnapshot(
      docs => {
        let arrUsuarios = []

        docs.forEach(doc => arrUsuarios.push({
          id: doc.id,
          data: doc.data()
        }))

        this.setState({
          usuarios: arrUsuarios,
          loading:false
        })
      }
    )
  }

  render(){
    return (
      <View>
        <Text>Profile</Text>
        <Profiles navigation={this.props.navigation} />
        <FlatList
          data={this.state.usuarios}
          keyExtractor={ (item) => item.id.toString()}
          renderItem={({item}) => <Text>{item.data.owner}</Text>}
        />
      </View>
    )
  }
}

export default Profile*/