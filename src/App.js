import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from '_navigations/RootNavigation';
import { Provider } from 'react-redux';
import { store } from '_store/index';

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <RootNavigation />
            </Provider>
        </NavigationContainer>
    );
}
