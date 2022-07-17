import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Categories from '../../components/Categories';
import { getStatusBarHeight } from '../../components/Layout';
import { addproducts, getcategories } from '../../utils/services';

interface Props {}

interface State {
    categoryList: [],
    activeCategoryName: string,
    title: string,
    price: string,
    desc: string,
    link: string,
}

export class AddProduct extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            categoryList: [],
            activeCategoryName: '',
            title: '',
            price: '',
            desc: '',
            link: '',
        };
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = async () => {
        await getcategories().then(res => {
            this.setState({categoryList: res.data})
            
        })
    }

    categorySelected = (item: any) => {
        this.setState({
            activeCategoryName: item.name
        })
    }

    addProd = () => {
        const {title, price, desc, link, category, activeCategoryName} = this.state;
        if(title !== '' && price !== '' && desc !== '' && link !== '' && activeCategoryName !== '') {
            addproducts(title,price,activeCategoryName,desc,link).then(res => {
                console.log(res, 'ekleme işlemi başarılı')
                if(res.status === 201) {
                    this.props.navigation.goBack();
                }
            })
        } else {
            alert('Please fill all inputs')
        }
    }

    render() {
        const {categoryList, activeCategoryName} = this.state;
        return (
            <View style={s.container}>
                <TextInput 
                style={s.input} 
                placeholder={'Product Title'} 
                placeholderTextColor={'#999999'} 
                onChangeText={(text) => this.setState({title: text})} 
                />
                 <TextInput 
                style={s.input} 
                placeholder={'Price'} 
                placeholderTextColor={'#999999'} 
                keyboardType={'number-pad'}
                onChangeText={(text) => this.setState({price: text})} 
                />
                 <TextInput 
                style={s.multilineinput} 
                multiline
                placeholder={'Description'} 
                placeholderTextColor={'#999999'} 
                onChangeText={(text) => this.setState({desc: text})} 
                />
                   <TextInput 
                style={s.input} 
                placeholder={'Image Link'} 
                placeholderTextColor={'#999999'} 
                onChangeText={(text) => this.setState({link: text})} 
                />
                {activeCategoryName !== '' &&  <Text>Selected Category: {activeCategoryName}</Text>}
               
                 <Categories 
                categoriesList={categoryList} 
                categoryPress={(item: any) => this.categorySelected(item)} 
                activeCategoryName={activeCategoryName}
                />

                <TouchableOpacity style={s.button} onPress={() => this.addProd()}>
                    <Text style={{color: 'white'}}>Add Product</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        paddingTop: getStatusBarHeight() + 20,
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        marginBottom: 15,
        paddingLeft: 10
    },
    multilineinput: {
        width: '100%',
        height: 100,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        marginBottom: 15,
        paddingLeft: 10
    },
    button: {
        width: '40%',
        height:50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        alignSelf: 'center'
    }
})