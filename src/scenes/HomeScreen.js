import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, Button, View } from 'react-native';
import PostCard from '_molecules/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '_store/actions/posts/posts';
import { SCREENS } from '_utils/screens';

const HomeScreen = ({ navigation, route }) => {
    const { isLoading } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    useEffect(() => {
        // if (isLoading) Alert.alert('success');
    }, [isLoading]);
    return (
        <View>
            {!!isLoading && <ActivityIndicator />}
            <PostCard
                title={'Test title'}
                body={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                }
                likes={35}
                dislikes={10}
            />
            <Button
                title={'test'}
                onPress={() => {
                    // navigation.navigate(SCREENS.TEST, { test: 42, test1: 43 });
                    navigation.navigate({ name: SCREENS.TEST, params: { test: 24, test1: 43 }, key: 0 });
                }}
            />
        </View>
    );
};

export default HomeScreen;
