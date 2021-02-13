import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { View } from 'react-native';

const PostSkeleton = () => {
    return (
        <SkeletonPlaceholder>
            <View style={[{ height: 180, paddingHorizontal: 16 }]}>
                <View style={[{ marginBottom: 16 }]}>
                    <View style={{ height: 20, width: '80%', borderRadius: 4 }} />
                </View>
                <View>
                    <View style={{ height: 17, width: '90%', borderRadius: 4, marginBottom: 8 }} />
                    <View style={{ height: 17, width: '90%', borderRadius: 4, marginBottom: 8 }} />
                    <View style={{ height: 17, width: '90%', borderRadius: 4, marginBottom: 8 }} />
                    <View style={{ height: 17, width: '40%', borderRadius: 4, marginBottom: 8 }} />
                </View>
            </View>
        </SkeletonPlaceholder>
    );
};

export default PostSkeleton;
