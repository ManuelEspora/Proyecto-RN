import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AntDesign } from '@expo/vector-icons';
import FunctionalitiesNav from './FunctionalitiesNav';
import NewPost from '../screens/NewPost'
import Profile from '../screens/Profile'


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
            component={NewPost}
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
                <AntDesign name='profile' color='blue' size={22} />
            }}
            />
        </Tab.Navigator>
    )
}