import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '_utils/screens';
import HomeScreen from '_scenes/HomeScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default RootNavigation;
