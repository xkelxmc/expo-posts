import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '_utils/screens';
import HomeScreen from '_scenes/HomeScreen';
import { Button, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const headerStyle = {
    backgroundColor: 'red',
};

const TestScreen = ({ navigation, route }) => {
    const { test, test1 } = route.params;
    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'test ' + test1,
            headerLeft: () => (
                <View>
                    <Button title={'back'} onPress={() => {}} />
                </View>
            ),
            headerRight: () => (
                <View>
                    <Button title={'back'} onPress={() => {}} />
                </View>
            ),
        });
    }, []);
    return (
        <View>
            <Text>Test {test}</Text>
            <Button
                title={'goBack'}
                onPress={() => {
                    navigation.goBack();
                    // navigation.push(SCREENS.TEST, { test: 88, test1: 43 });
                    // navigation.navigate(SCREENS.HOME, { test: 42, test1: 43 });
                    // navigation.navigate({ name: SCREENS.TEST, params: { test: 42, test1: 43 }, key: 1 });
                }}
            />
        </View>
    );
};

const RootNavigation = () => {
    return (
        <Stack.Navigator mode='modal'>
            <Stack.Screen
                name={SCREENS.HOME}
                component={HomeScreen}
                options={{
                    headerTitle: 'дом',
                }}
            />
            <Stack.Screen
                name={SCREENS.TEST}
                component={TestScreen}
                options={{
                    headerTitle: 'test',
                }}
            />
        </Stack.Navigator>
    );
};

export default RootNavigation;
