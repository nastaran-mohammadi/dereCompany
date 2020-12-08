import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image, ActivityIndicator} from 'react-native';
import ListAnimation from "../components/ListAnimation";
import setColor from "../helper/setting";
import styles from "../styles/styles";


const App: () => React$Node = () => {

        const [isLoading, setLoading] = useState(true);
        const [data, setData] = useState([]);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }, []);

        return (
            <>
                <StatusBar hidden/>
                <View
                    style={styles.header}>
                    <Text
                        style={styles.title}>
                        Groceries
                    </Text>
                </View>
                {isLoading ? <ActivityIndicator color="#0000ff"/> : <ListAnimation
                    style={styles.listMargin}
                    distanceBetweenItem={12}
                    data={data}
                    keyExtractor={element => element.index}
                    renderItem={data => {
                        return (
                            <View
                                elevation={5}
                                style={styles.listStyle}>
                                <ItemUi element={data.item}/>
                            </View>
                        );
                    }}
                />}
            </>
        );
    }
;


const ItemUi = (
    {
        element
    }
    ) => {

        return (
            <View style={styles.itemStyle}>
                <Image
                    source={require('../assets/image.png')}
                    style={styles.imageStyle}
                />
                <View style={styles.listView}>
                    <Text
                        style={styles.ListTitle} numberOfLines={1}>
                        {element.name}
                    </Text>
                    <Text style={[styles.street, {color: setColor(element)}]}>
                        {element.address.street}
                    </Text>
                </View>
                <View
                    style={styles.thirdView}>
                    <Text
                        style={styles.zipcode}>
                        {element.address.zipcode}
                    </Text>
                    <Text style={styles.city}>
                        {element.address.city}
                    </Text>
                </View>
            </View>
        );
    }
;


export default App;