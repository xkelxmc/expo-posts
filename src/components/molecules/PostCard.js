import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextHeader from '_atoms/TextHeader';
import TextBody from '_atoms/TextBody';
import FeedbackPanel from '_atoms/FeedbackPanel';

const PostCard = ({ title, body, likes, dislikes }) => {
    return (
        <View style={style.card}>
            <TextHeader text={title} />
            <TextBody text={body} />
            <FeedbackPanel likes={likes} dislikes={dislikes} />
        </View>
    );
};

const style = StyleSheet.create({
    card: { padding: 12, backgroundColor: '#FAFAFA' },
});

export default PostCard;
