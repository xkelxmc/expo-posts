import React, { useEffect, useState } from 'react';
import AuthNavigator from '_navigations/unAuthorized/AuthNavigator';
import MainNavigator from '_navigations/authorized/MainNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSetPinCode } from '_store/actions/auth/auth';
import { ActivityIndicator, InteractionManager, View } from 'react-native';
import { hasUserSetPinCode } from '@haskkor/react-native-pincode';

const RootNavigation = () => {
    const [isLoadingData, setIsLoadingData] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const checkPin = () => {
            InteractionManager.runAfterInteractions(() => {
                setIsLoadingData(false);
            });
            hasUserSetPinCode().then(isSet => {
                if (isSet) {
                    dispatch(setIsSetPinCode(true));
                }
            });
        };
        checkPin();
    }, []);
    const { isSetPinCode } = useSelector(store => store.auth);

    if (isLoadingData) {
        return (
            <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
                <ActivityIndicator color={'red'} size={100} />
            </View>
        );
    }

    return isSetPinCode ? <MainNavigator /> : <AuthNavigator />;
};

export default RootNavigation;
