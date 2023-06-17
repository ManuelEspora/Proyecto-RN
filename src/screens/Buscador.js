import { Text, View, TextInput, FlatList, StyleSheet } from "react-native";
import React, {Component} from "react";
import {db} from '../firebase/config';

class Buscador extends Component {

    constructor(props){
        super(props)
        this.state={
            busqueda:'',
            usuarios:[], 
            resultados: []
        }
    }

    componentDidMount(){
        db.collection('users')
        .onSnapshot(
            docs => {
                let arrUsers = []
                docs.forEach(doc => {
                    arrUsers.push({
                        id:doc.id,
                        data:doc.data()
                    })
                })
                this.setState({
                    usuarios:arrUsers,
                    resultados:arrUsers
                })
            }
        )
    }

    filtro(filtrador){
        let arrFiltrado = this.state.resultados 
        .filter(usuario =>
          usuario.data.owner.toLowerCase().includes(filtrador.toLowerCase()))
          this.setState({usuarios:arrFiltrado})
      }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}> Buscador</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Ingresa el nombre de usuario'
                    onChangeText={(text) => this.filtro(text)}
                />
                <FlatList   
                    data={this.state.usuarios}
                    keyExtractor={item => item.id.toString()}
                    renderItem = {({item}) => <Text>{item.data.owner}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent:'center',
        paddingHorizontal:300,
        backgroundColor: 'lightblue',
    },
    input:{
        borderWidth:2,
        borderColor: 'green',
        marginTop: 24,
        height:30,
        padding:5,
        backgroundColor: 'white'
    },
    titulo: {
        fontStyle:'italic',
        fontWeight: 500,
        fontSize: 20,
        textAlign: 'center',
      }
})











export default Buscador