import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AntDesign } from '@expo/vector-icons';
import FunctionalitiesNav from './FunctionalitiesNav';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile'
import NewPosts from '../screens/NewPosts';

const Tab = createBottomTabNavigator()

export default function HomeNav() {
    return(
        <Tab.Navigator>
            <Tab.Screen
            name='Feed'
            component={FunctionalitiesNav}
            options={{
                headerShown:false,
                tabBarIcon: () =>
                <AntDesign name='home' color='blue' size={22} />
            }}
            />
            <Tab.Screen
            name='NewPosts'
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
                <AntDesign name='profile' color='blue' size={22} />
            }}
            />
        </Tab.Navigator>
    )
}