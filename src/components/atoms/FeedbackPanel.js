import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FeedbackPanel = ({ likes, dislikes }) => {
    return (
        <View>
            <View>
                <AntDesign name='like1' size={24} color='black' />
                <Text>{likes}</Text>
            </View>
            <View>
                <Text>{dislikes}</Text>
            </View>
        </View>
    );
};

export default FeedbackPanel;
