import React, { useEffect, useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import PostCard from '_molecules/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '_store/actions/posts/posts';
import { SCREENS } from '_utils/screens';
import PostSkeleton from '_atoms/skeletons/PostSkeleton';
import SvgComponent from '_atoms/SvgExample';

const HomeScreen = ({ navigation, route }) => {
    const [refreshing, setRefreshing] = useState(false);
    const { isLoading, posts } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    const renderPost = ({ item }) => {
        if (isLoading) {
            return <PostSkeleton />;
        }
        return (
            <PostCard
                title={item.title}
                body={item.body}
                likes={item.userLikes.length}
                dislikes={item.userDislikes.length}
            />
        );
    };
    const onRefresh = () => {
        setRefreshing(true);
        dispatch(getPosts());
    };
    useEffect(() => {
        if (!isLoading) {
            setRefreshing(false);
        }
    }, [isLoading]);
    return (
        <View style={[{ flex: 1 }]}>
            <FlatList
                data={!isLoading > 0 ? posts : [1, 2, 3]}
                refreshing={refreshing}
                onRefresh={onRefresh}
                ListHeaderComponent={
                    <>
                        <Button
                            title={'test'}
                            onPress={() => {
                                // navigation.navigate(SCREENS.TEST, { test: 42, test1: 43 });
                                navigation.navigate({
                                    name: SCREENS.MAIN.TEST,
                                    params: { test: 24, test1: 43 },
                                    key: 0,
                                });
                            }}
                        />
                    </>
                }
                renderItem={renderPost}
                keyExtractor={(item, index) => (!isLoading ? item._id : index.toString())}
            />
        </View>
    );
};

export default HomeScreen;
