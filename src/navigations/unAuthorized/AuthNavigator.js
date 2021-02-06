import { SCREENS } from '_utils/screens';
import { Platform } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '_scenes/auth/LoginScreen';
import PinCodeScreen from '_scenes/PinCodeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SCREENS.AUTH.LOGIN}
                component={LoginScreen}
                options={{
                    headerTitle: 'Вход',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? '#2F80ED' : '#f7f7f7',
                    },
                    headerTintColor: Platform.OS === 'android' ? '#ffffff' : undefined,
                }}
            />
            <Stack.Screen
                name={SCREENS.AUTH.PIN_CODE}
                component={PinCodeScreen}
                options={{
                    headerTitle: 'Вход',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? '#2F80ED' : '#f7f7f7',
                    },
                    headerTintColor: Platform.OS === 'android' ? '#ffffff' : undefined,
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
