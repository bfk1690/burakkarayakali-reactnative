import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import { getproductbyid } from '../../utils/services';

interface Props {
    // item: any
}

interface State {
    item: {},
    loading: boolean
}

export class ProductDetail extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            item: {},
            loading: true
        };
    }

    componentDidMount() {
        this.getProduct();
    }

    getProduct = () => {
        const {item} = this.props.route.params;
        getproductbyid(item.id).then(res => {
            console.log(res, 'id li product')
            this.setState({
                item: res.data,
                loading: false
            })
        })
    }

    render() {
        const {item, loading} = this.state;
        return (
            <View style={s.container}>
                {loading ? <View style={s.act}>

                    <ActivityIndicator size={'small'} />
                </View> : <><Image source={{uri: item.avatar}} style={s.avatar} />
                <View style={s.bottom}>
                    <View style={s.flex}>
                        <Text style={s.name}>{item.name}</Text>
                        <Text style={s.price}>{item.price}$</Text>
                    </View>
                    <ScrollView style={{marginTop: 7}}>
                        <Text style={s.desc}>{item.description}</Text>
                    </ScrollView>
                </View></>}
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        flex: .6,
        resizeMode: 'contain'
    },
    act: {
        flex: 1,
        alignItems: 'center',
        justifyContent :'center'
    },
    bottom: {
        flex: .4,
        backgroundColor: 'black',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20
    },
    flex:  {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    name: {
        color: 'white',
        fontSize: 16,
        maxWidth: '85%'
    },
    price: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    desc: {
        color: 'white',
        fontSize: 15,
        padding: 20
    }
})