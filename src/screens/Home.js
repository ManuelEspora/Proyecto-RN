import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { db } from '../firebase/config'
import Posts from '../components/Posts'

export default class HomeNav extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        console.log(auth.currentUser.email)
        db.collection('posts')
        .where('owner','==', auth.currentUser.email)
        .orderBy
        .limit(2)
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
          <View>
            <Text>Feed</Text>
            <Posts
                data={this.state.posts}
                navigation={this.props.navigation}
            />
          </View>
        )
      }
    }