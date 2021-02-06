import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const headerStyle = {
    backgroundColor: 'red',
};

const initialState = {
    count: 0,
    modifire: 0,
    name: '',
    lastName: '',
    email: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'changeText':
            return { ...state, [action.key]: action.value };
        case 'changeModifire':
            return { ...state, modifire: action.modifire };
        case 'inc':
            return { ...state, count: state.count + 1 };
        case 'dec':
            return { ...state, count: state.count - 1 };
        case 'up':
            return { ...state, count: state.count * state.modifire };
        case 'down':
            return { ...state, count: state.count / state.modifire };
    }
};

const TestScreen = ({ navigation, route }) => {
    const { test, test1 } = route.params;
    const [{ count, modifire, ...state }, changeState] = useReducer(reducer, initialState);
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

    const [text2, setTest2] = useState('');
    useEffect(() => {
        setTest2((count > 5 ? state.name : state.lastName) + ' e:' + state.email);
    }, [state, count]);

    const text = useMemo(() => (count > 5 ? state.name : state.lastName) + ' e:' + state.email, [state, count]);

    const canSendForm = () => {
        if (count > 5 && !state.name) {
            return false;
        }
        if (!state.lastName && state.lastName.length > 100) {
            return false;
        }
        if (!state.email) {
            return false;
        }
        return true;
    };

    const canSendForm2 = useCallback(() => {
        if (1231234534634634 * 23532535235 * count > 5 && !state.name) {
            return false;
        }
        if (!state.lastName && state.lastName.length > 100) {
            return false;
        }
        if (!state.email) {
            return false;
        }
        return true;
    }, [state, count]);

    return (
        <View>
            <Text>Test {test}</Text>
            <Text>{count}</Text>

            <TextInput
                value={modifire}
                onChangeText={text => {
                    changeState({ type: 'changeText', key: 'email', value: text }); //+text  }); //
                }}
                style={{ backgroundColor: '#ededed' }}
                placeholder={'email'}
            />
            <TextInput
                value={modifire}
                onChangeText={text => {
                    changeState({ type: 'changeText', key: 'name', value: text }); //+text  }); //
                }}
                style={{ backgroundColor: '#ededed' }}
                placeholder={'name'}
            />
            <TextInput
                value={modifire}
                onChangeText={text => {
                    changeState({ type: 'changeText', key: 'lastName', value: text }); //+text  }); //
                }}
                style={{ backgroundColor: '#ededed' }}
                placeholder={'lastName'}
            />
            <TextInput
                value={modifire}
                onChangeText={text => {
                    changeState({ type: 'changeModifire', modifire: Number(text) }); //+text  }); //
                }}
                style={{ backgroundColor: '#ededed' }}
                placeholder={'Count'}
            />
            <Button
                title={'/'}
                onPress={() => {
                    changeState({ type: 'down' });
                }}
            />
            <Button
                title={'*'}
                onPress={() => {
                    changeState({ type: 'up' });
                }}
            />
            <Button
                title={'+'}
                onPress={() => {
                    changeState({ type: 'inc' });
                }}
            />
            <Button
                title={'-'}
                onPress={() => {
                    changeState({ type: 'dec' });
                }}
            />
            <Button
                title={'goBack'}
                onPress={() => {
                    navigation.goBack();
                    // navigation.push(SCREENS.TEST, { test: 88, test1: 43 });
                    // navigation.navigate(SCREENS.HOME, { test: 42, test1: 43 });
                    // navigation.navigate({ name: SCREENS.TEST, params: { test: 42, test1: 43 }, key: 1 });
                }}
            />
            <Text style={{ backgroundColor: 'yellow' }}>{text}</Text>
            {canSendForm2() ? <Button title={'send'} onPress={() => {}} /> : <Text>Отправить нельзя</Text>}
        </View>
    );
};

export default TestScreen;
