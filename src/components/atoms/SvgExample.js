import * as React from 'react';
import { Animated, View } from 'react-native';
import Svg, { G, Rect, Path } from 'react-native-svg';
import { useEffect, useRef } from 'react';
import AnimatedR, { Value, Easing } from 'react-native-reanimated';

const AnimRect = Animated.createAnimatedComponent(Rect);
const AnimPath = AnimatedR.createAnimatedComponent(Path);

function SvgComponent(props) {
    const heightAnimate = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const node = new Value(0);
    useEffect(() => {
        Animated.timing(heightAnimate, { toValue: 1, duration: 3000, useNativeDriver: false }).start();
        Animated.timing(fadeAnim, { toValue: 1, duration: 2000, useNativeDriver: false }).start();

        AnimatedR.timing(node, { toValue: 1, duration: 3000, easing: Easing.inOut(Easing.linear) }).start();
        // Animated.loop(
        //     Animated.sequence([Animated.delay(2000), Animated.timing(heightAnimate, { toValue: 1, duration: 3000 })]),
        //     { iterations: 10 },
        // );
        // Animated.timing(colorAnim, { toValue: 1, duration: 3000, useNativeDriver: false });
    }, []);
    return (
        <Animated.View style={[{ opacity: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) }]}>
            <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 610 610' {...props}>
                <G strokeLinejoin='round' stroke='#4a0' transform='translate(5 -397.36)'>
                    <AnimRect
                        ry={1.538}
                        height={heightAnimate.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [100, 600, 450],
                        })}
                        width={600}
                        y={402.36}
                        strokeWidth={10}
                        fill='none'
                    />
                    <G strokeWidth={0.3} strokeLinecap='round'>
                        <AnimPath
                            fill={AnimatedR.interpolateColors(node, {
                                inputRange: [0, 1],
                                outputColorRange: ['#8ddb57', '#3b671d'],
                            })}
                            transform='matrix(3.50766 0 0 3.86434 27.541 -1203.446)'
                            d='M109.37 488.03c-2.769 2.856-29.131 1.593-33.108 1.593-2.888 0-23.226 1.185-24.017-1.593-1.089-3.826 13.186-26.024 15.174-29.469 1.444-2.501 10.587-20.707 13.388-20.003 3.858.97 15.945 24.431 17.934 27.876 1.444 2.501 12.639 19.522 10.629 21.596z'
                        />
                        <Path
                            fill='#4a0'
                            transform='matrix(3.50766 0 0 3.86434 27.541 -1118.43)'
                            d='M109.37 488.03c-2.769 2.856-29.131 1.593-33.108 1.593-2.888 0-23.226 1.185-24.017-1.593-1.089-3.826 13.186-26.024 15.174-29.469 1.444-2.501 10.587-20.707 13.388-20.003 3.858.97 15.945 24.431 17.934 27.876 1.444 2.501 12.639 19.522 10.629 21.596z'
                        />
                        <Path
                            fill='#250'
                            transform='matrix(3.50766 0 0 3.86434 -29.15 -1292.248)'
                            d='M97.732 546.8c3.498 0 4.04 2.816 4.04 6.314l2.273 17.677a6.3 6.3 0 01-6.313 6.314 6.3 6.3 0 01-6.314-6.314l2.273-17.678c0-3.497.543-6.313 4.04-6.313z'
                        />
                        <Path
                            fill='#4a0'
                            transform='matrix(3.50766 0 0 3.86434 27.541 -1048.873)'
                            d='M109.37 488.03c-2.769 2.856-29.131 1.593-33.108 1.593-2.888 0-23.226 1.185-24.017-1.593-1.089-3.826 13.186-26.024 15.174-29.469 1.444-2.501 10.587-20.707 13.388-20.003 3.858.97 15.945 24.431 17.934 27.876 1.444 2.501 12.639 19.522 10.629 21.596z'
                        />
                        <G>
                            <Path
                                fill='#4a0'
                                transform='matrix(1.66383 0 0 1.83302 363.054 -77.486)'
                                d='M109.37 488.03c-2.769 2.856-29.131 1.593-33.108 1.593-2.888 0-23.226 1.185-24.017-1.593-1.089-3.826 13.186-26.024 15.174-29.469 1.444-2.501 10.587-20.707 13.388-20.003 3.858.97 15.945 24.431 17.934 27.876 1.444 2.501 12.639 19.522 10.629 21.596z'
                            />
                            <Path
                                fill='#4a0'
                                transform='matrix(1.66383 0 0 1.83302 363.054 -37.16)'
                                d='M109.37 488.03c-2.769 2.856-29.131 1.593-33.108 1.593-2.888 0-23.226 1.185-24.017-1.593-1.089-3.826 13.186-26.024 15.174-29.469 1.444-2.501 10.587-20.707 13.388-20.003 3.858.97 15.945 24.431 17.934 27.876 1.444 2.501 12.639 19.522 10.629 21.596z'
                            />
                            <Path
                                fill='#250'
                                transform='matrix(1.66383 0 0 1.83302 336.164 -119.608)'
                                d='M97.732 546.8c3.498 0 4.04 2.816 4.04 6.314l2.273 17.677a6.3 6.3 0 01-6.313 6.314 6.3 6.3 0 01-6.314-6.314l2.273-17.678c0-3.497.543-6.313 4.04-6.313z'
                            />
                            <Path
                                fill='#4a0'
                                transform='matrix(1.66383 0 0 1.83302 363.054 -4.165)'
                                d='M109.37 488.03c-2.769 2.856-29.131 1.593-33.108 1.593-2.888 0-23.226 1.185-24.017-1.593-1.089-3.826 13.186-26.024 15.174-29.469 1.444-2.501 10.587-20.707 13.388-20.003 3.858.97 15.945 24.431 17.934 27.876 1.444 2.501 12.639 19.522 10.629 21.596z'
                            />
                        </G>
                        <G>
                            <Path
                                fill='#4a0'
                                transform='matrix(2.2916 0 0 2.52463 -71.929 -460.908)'
                                d='M109.37 488.03c-2.769 2.856-29.131 1.593-33.108 1.593-2.888 0-23.226 1.185-24.017-1.593-1.089-3.826 13.186-26.024 15.174-29.469 1.444-2.501 10.587-20.707 13.388-20.003 3.858.97 15.945 24.431 17.934 27.876 1.444 2.501 12.639 19.522 10.629 21.596z'
                            />
                            <Path
                                fill='#4a0'
                                transform='matrix(2.2916 0 0 2.52463 -71.929 -405.367)'
                                d='M109.37 488.03c-2.769 2.856-29.131 1.593-33.108 1.593-2.888 0-23.226 1.185-24.017-1.593-1.089-3.826 13.186-26.024 15.174-29.469 1.444-2.501 10.587-20.707 13.388-20.003 3.858.97 15.945 24.431 17.934 27.876 1.444 2.501 12.639 19.522 10.629 21.596z'
                            />
                            <Path
                                fill='#250'
                                transform='matrix(2.2916 0 0 2.52463 -108.966 -518.924)'
                                d='M97.732 546.8c3.498 0 4.04 2.816 4.04 6.314l2.273 17.677a6.3 6.3 0 01-6.313 6.314 6.3 6.3 0 01-6.314-6.314l2.273-17.678c0-3.497.543-6.313 4.04-6.313z'
                            />
                            <Path
                                fill='#4a0'
                                transform='matrix(2.2916 0 0 2.52463 -71.929 -359.923)'
                                d='M109.37 488.03c-2.769 2.856-29.131 1.593-33.108 1.593-2.888 0-23.226 1.185-24.017-1.593-1.089-3.826 13.186-26.024 15.174-29.469 1.444-2.501 10.587-20.707 13.388-20.003 3.858.97 15.945 24.431 17.934 27.876 1.444 2.501 12.639 19.522 10.629 21.596z'
                            />
                        </G>
                    </G>
                </G>
            </Svg>
        </Animated.View>
    );
}

export default SvgComponent;
