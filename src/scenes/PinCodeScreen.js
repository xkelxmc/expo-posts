import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSetPinCode, setUserToken } from '_store/actions/auth/auth';
import PINCode from '@haskkor/react-native-pincode';
import * as SecureStore from 'expo-secure-store';

const PinCodeScreen = () => {
    const dispatch = useDispatch();
    const { user, token, isSetPinCode } = useSelector(store => store.auth);
    const finishProcess = async () => {
        if (isSetPinCode) {
            const authToken = await SecureStore.getItemAsync('authToken');
            if (authToken) {
                dispatch(setUserToken(authToken));
            }
        } else {
            dispatch(setIsSetPinCode(true));
        }
    };
    return (
        <View style={[{ flex: 1 }]}>
            <PINCode
                colorPassword={'#424242'}
                stylePinCodeColorTitle={'#424242'}
                stylePinCodeButtonCircle={{ backgroundColor: 'yellow' }}
                stylePinCodeDeleteButtonColorHideUnderlay={'#424242'}
                stylePinCodeDeleteButtonColorShowUnderlay={'#424242'}
                stylePinCodeColorSubtitle={'#424242'}
                colorPasswordError={'#9DAFC8'}
                colorPasswordEmpty={'#686868'}
                numbersButtonOverlayColor={'#9f9f9f'}
                stylePinCodeButtonNumber={'#212121'}
                stylePinCodeButtonNumberPressed={'#ffffff'}
                titleChoose={'1 - Enter a PIN Code'}
                titleConfirm={'2 - Confirm your PIN Code'}
                titleConfirmFailed={'Your entries did not match'}
                titleEnter={'Enter your PIN Code'}
                titleAttemptFailed={'Incorrect PIN Code'}
                subtitleChoose={'Подзаголовок первый ввод'}
                subtitleConfirm={'Подзаголовок подтверждение'}
                subtitleEnter={'Подзаголовок вход'}
                subtitleError={'Подзаголовок ошибка'}
                textButtonLockedPage={'кнопка при ошибке'}
                maxAttempts={5} // максимум попыток
                touchIDDisabled={true}
                status={!isSetPinCode ? 'choose' : 'enter'}
                buttonDeleteText={'стереть'}
                finishProcess={finishProcess}
            />
        </View>
    );
};

export default PinCodeScreen;
