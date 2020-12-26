import React from 'react';
import { Text, View } from 'react-native';

const TextHeader = ({ text }) => {
    return (
        <View>
            <Text>{text}</Text>
        </View>
    );
};

export default TextHeader;
