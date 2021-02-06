import React from 'react';
import { SCREENS } from '_utils/screens';
import HomeScreen from '_scenes/HomeScreen';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from '_scenes/TestScreen';
import PinCodeScreen from '_scenes/PinCodeScreen';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const StackPinCode = createStackNavigator();

const MainNavigator = () => {
    const { token } = useSelector(store => store.auth);
    if (!token) {
        return (
            <StackPinCode.Navigator>
                <StackPinCode.Screen
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
            </StackPinCode.Navigator>
        );
    }
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SCREENS.MAIN.HOME}
                component={HomeScreen}
                options={{
                    headerTitle: 'дом',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? '#2F80ED' : '#f7f7f7',
                    },
                    headerTintColor: Platform.OS === 'android' ? '#ffffff' : undefined,
                }}
            />
            <Stack.Screen
                name={SCREENS.MAIN.TEST}
                component={TestScreen}
                options={{
                    headerTitle: 'test',
                }}
            />
        </Stack.Navigator>
    );
};

export default MainNavigator;
