import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AntDesign } from '@expo/vector-icons';
import FunctionalitiesNav from './FunctionalitiesNav';
import Home from '../screens/Home';
import Profile from '../screens/Profile'
import {FontAwesome} from '@expo/vector-icons';
import NewPosts from '../screens/NewPosts';
import Buscador from '../screens/Buscador';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function HomeNav() {
    return(
        <Tab.Navigator>
            <Tab.Screen
            name='Home'
            component={FunctionalitiesNav}
            options={{
                headerShown:false,
                tabBarIcon: () =>
                <AntDesign name='home' color='blue' size={22} />
            }}
            />
            <Tab.Screen
            name='NewPost'
            component={NewPosts}
            options={{
                headerShown:false,
                tabBarIcon: () =>
                <AntDesign name='plus' color='blue' size={22} />
            }}
            />
            <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                headerShown:false,
                tabBarIcon: () =>
                <FontAwesome name='user' color='blue' size={22} />
            }}
            />
            <Tab.Screen
                name='Buscador'
                component={Buscador}
                options={{
                    headerShown:false,
                    tabBarIcon: () =>
                    <Ionicons name='search-sharp' color='blue' size={22} />
                }}
            />
        </Tab.Navigator>
    )
}