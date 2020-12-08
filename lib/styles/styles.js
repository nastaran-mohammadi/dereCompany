import {StyleSheet,Dimensions} from 'react-native';

let {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 100,
        backgroundColor: '#06d6a0',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
    },
    title:{
        fontSize: 32,
        marginLeft: 16,
        marginTop: 50,
        color:'#ffffff',
        fontWeight: '200',
    },
    listStyle:{
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        height: 70,
        width: width - 30,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 6,
    },
    imageStyle:{
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginLeft: 10,
        borderRadius: 500,
    },
    listView:{
        flex: 1,
        flexDirection: 'column',
        height: 50,
        width: '90%',
        marginHorizontal: 10,
        marginVertical: 8,
    },
    ListTitle:{
        fontSize: 18,
        fontWeight: '200',
        marginBottom: 4,
        color: '#560bad',
    },
    thirdView:{
        flex: 1,
        flexDirection: 'column',
        height: 50,
        width: '90%',
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'flex-end',
    },
    zipcode:{
        marginBottom: 4,
        fontSize: 14,
        fontWeight: '100',
        color:'#219ebc'
    },
    city:{alignItems: 'flex-end', color: '#8e9aaf', fontSize: 12},
    itemStyle:{flex: 1, flexDirection: 'row'},
    street:{alignItems: 'flex-end'},
    listMargin:{marginTop: 8}
});
export default styles;