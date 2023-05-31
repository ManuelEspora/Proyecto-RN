import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Camera} from 'expo-camera'

export default class CameraPost extends Component {
    constructor(props){
        super(props)
        this.state={
            mostrarCamara: false,
            fotoTomada: ''
        }
    }

    componentDidMount(){
        
    }
}