import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { Value, Easing } from 'react-native-reanimated';
import SvgComponent from '_atoms/SvgExample';

const TestScreen = ({ navigation, route }) => {
    const node = new Value(0);
    useEffect(() => {
        Animated.timing(node, { toValue: 1, duration: 3000, easing: Easing.inOut(Easing.linear) }).start();
    }, []);

    return (
        <View>
            <Animated.View
                style={[
                    {
                        height: 300,
                        backgroundColor: Animated.interpolateColors(node, {
                            inputRange: [0, 1],
                            outputColorRange: ['#00dd00', '#dd0000'],
                        }),
                    },
                ]}
            >
                <SvgComponent />
            </Animated.View>
        </View>
    );
};

export default TestScreen;
