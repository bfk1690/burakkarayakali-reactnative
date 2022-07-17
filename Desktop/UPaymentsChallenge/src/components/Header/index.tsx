import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native'

interface Props {}

interface State {}

export class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={s.header}>
                <Text style={s.title}>UPayments Store</Text>
            </View>
        )
    }
}

const s = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#999999',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})