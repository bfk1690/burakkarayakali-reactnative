import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
 
  interface Props {
    item: Object,
    index: number,
    productClick: Function
  }
 
class ProductItem extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() { 
        const { item } = this.props
        return ( 
            <TouchableOpacity onPress={() => this.props.productClick(item)} style={s.container}>
                <Image style={s.image} source={{uri: item.avatar}} />
                <View style={s.bottom}>
                <Text style={s.name}>{item.name}</Text>
                <Text style={s.price}>{item.price}$</Text>
                </View>
            </TouchableOpacity>
         );
    }
}

const s = StyleSheet.create({
    container: {
        flex: 0.49,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 5
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        borderRadius: 5
    },
    bottom: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: '100%',
        height: 80,
        justifyContent: 'space-around',
        backgroundColor: 'black',
        borderRadius: 5
    },
    name: {
        fontSize: 16,
        marginTop: 7,
        color: 'white'
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 7,
        color: 'white'
    }
})
 
export default ProductItem;