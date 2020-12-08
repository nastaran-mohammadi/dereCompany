import React from 'react';
import { Animated, FlatList } from 'react-native';

import ListItems from './ListItems';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ListAnimation = (props) => {
    const {
        data,
        renderItem,
        distanceBetweenItem: distance,
        ...otherProps
    } = props;
    const y = new Animated.Value(0);
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
        useNativeDriver: true,
    });

    let distanceBetweenItem: number = distance || 8;
    return (
        <AnimatedFlatList
            scrollEventThrottle={16}
            bounces={false}
            data={data}
            renderItem={(data) => {
                let item = renderItem(data);
                const { index } = data;
                return <ListItems {...{ index, y, item, distanceBetweenItem }} />;
            }}
            {...{ onScroll }}
            {...otherProps}
        />
    );
};

export default ListAnimation;