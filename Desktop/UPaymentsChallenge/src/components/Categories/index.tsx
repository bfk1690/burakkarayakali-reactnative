import * as React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface CatogoriesTypes {
    id: string;
    createdAt: string,
    name: string;
  }

 
  interface Props {
    categoriesList: CatogoriesTypes[];
    categoryPress: Function,
    activeCategoryName: string
  }
 
class Categories extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
            <View style={s.container}>
                <ScrollView contentContainerStyle={s.ccs} horizontal showsHorizontalScrollIndicator={false}>
                {this.props.categoriesList.map((item,index) => {
                    return (
                        <TouchableOpacity style={[s.item,this.props.activeCategoryName === item.name ? s.active : s.inactive]} onPress={() => this.props.categoryPress(item)} key={index.toString()}>
                            <Text style={this.props.activeCategoryName === item.name ? s.activeText : s.inactiveText}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })}
                </ScrollView>
            </View>
         );
    }
}

const s = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    ccs: {
    paddingLeft: 20
    },
    item: {
        width: 'auto',
        height: 40,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
    },
    active: {
        backgroundColor: 'white'
    },
    inactive: {
        backgroundColor: 'black'
    },
    activeText: {
        color: 'black'
    },
    inactiveText: {
        color: 'white'
    }
})
 
export default Categories;