import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Comments from '../screens/Comments'
const Stack = createNativeStackNavigator()

function FunctionalitiesNav() {
    return (
      <Stack.Navigator>
        <Stack.Screen
            name='Home'
            component={Home}
        />
        <Stack.Screen
            name='Comments'
            component={Comments}
        />
      </Stack.Navigator>
    )
}

export default FunctionalitiesNav