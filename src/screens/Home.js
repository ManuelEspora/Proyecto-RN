import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { db, auth } from '../firebase/config';
import Posts from '../components/Posts'

class HomeNav extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        console.log(auth.currentUser.email)
        db.collection('posts')
        .onSnapshot( docs => {
            let arrDocs=[]

            docs.forEach(doc => arrDocs.push({
                id: doc.id,
                data:doc.data()
            }))
            console.log(arrDocs)

            this.setState({
                posts: arrDocs
            })
        })
    }
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.titulo}> Inicio </Text>
            <Posts
                data={this.state.posts}
                navigation={this.props.navigation}
            />
          </View>
        )
      }
    }


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'ligthblue'
    },
    titulo:{
        fontStyle:'italic',
        fontWeight: 500,
        fontSize: 30,
        textAlign: 'center',
      },

})
export default HomeNav