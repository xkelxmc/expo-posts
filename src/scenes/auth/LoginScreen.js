import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '_store/actions/auth/auth';
import { SCREENS } from '_utils/screens';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('test@test.ru');
    const [password, setPassword] = useState('123456');
    const dispatch = useDispatch();
    const { token } = useSelector(store => store.auth);
    useEffect(() => {
        if (token) {
            navigation.navigate(SCREENS.AUTH.PIN_CODE);
        }
    }, [token]);
    const handleLogin = () => {
        dispatch(loginUser(email, password));
    };
    return (
        <View>
            <View>
                <Text>Email</Text>
                <TextInput onChangeText={setEmail} value={email} style={[{ width: '100%', borderWidth: 1 }]} />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput onChangeText={setPassword} value={password} style={[{ width: '100%', borderWidth: 1 }]} />
            </View>
            <Button title={'Войти'} onPress={handleLogin} />
            <Button
                title={'test'}
                onPress={() => {
                    navigation.push('PinCodeAuthScreen', {});
                }}
            />
        </View>
    );
};

export default LoginScreen;
