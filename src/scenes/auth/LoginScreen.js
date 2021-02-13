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
        <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
            <View style={[{ width: '90%', marginBottom: 20 }]}>
                <Text style={[{ marginBottom: 12 }]}>Email:</Text>
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    style={[
                        {
                            width: '100%',
                            borderWidth: 1,
                            height: 44,
                            borderRadius: 13,
                            borderColor: '#6d6d6d',
                            paddingHorizontal: 12,
                            backgroundColor: '#dedede',
                        },
                    ]}
                />
            </View>
            <View style={[{ width: '90%', marginBottom: 20 }]}>
                <Text style={[{ marginBottom: 12 }]}>Password:</Text>
                <TextInput
                    onChangeText={setPassword}
                    value={password}
                    style={[
                        {
                            width: '100%',
                            borderWidth: 1,
                            height: 44,
                            borderRadius: 13,
                            borderColor: '#6d6d6d',
                            paddingHorizontal: 12,
                            backgroundColor: '#dedede',
                        },
                    ]}
                />
            </View>
            <Button title={'Войти'} onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
