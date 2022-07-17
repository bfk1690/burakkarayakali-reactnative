import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Alert, FlatList, TouchableOpacity } from 'react-native';
import Categories from '../../components/Categories';
import { Header } from '../../components/Header';
import { getStatusBarHeight } from '../../components/Layout';
import ProductItem from '../../components/ProductItem';
import { getcategories, getproducts } from '../../utils/services';

interface Props {}

interface State {
    categoryList: [],
    products: [],
    copyProducts: [],
    activeCategoryName: string
}

export class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            categoryList: [],
            products: [],
            copyProducts: [],
            activeCategoryName: ''
        };
    }

    componentDidMount() {
        this.getCategories();
        this.unsubscribe = this.props.navigation.addListener('focus', async () => {
            this.getCategories();
          });
      
          // Return the function to unsubscribe from the event so it gets removed on unmount
          return this.unsubscribe;
     
    }

    getCategories = async () => {
        await getcategories().then(res => {
            this.setState({categoryList: res.data})
            
        }).then(() => {
            getproducts().then(prd => {
                this.setState({
                    products: prd.data,
                    copyProducts: prd.data
                })
                console.log(prd, 'p list')
            })
        })
    }

    categorySelected = (item: any) => {
        this.setState({
            activeCategoryName: item.name
        },() => {
            this.filterProducts()
        })
    }

    filterProducts = () => {
        let filterData = this.state.copyProducts;
        let filteredData = filterData.filter(item => {
            return item.category === this.state.activeCategoryName
        });
        this.setState({
            products: filteredData
        })
    }

    productClick = (item) => {
        this.props.navigation.navigate('ProductDetail', {item: item})
    }

    render() {
        const {categoryList, activeCategoryName, products} = this.state;
        return (
            <View style={s.container}>
                <Header />
                <Categories 
                categoriesList={categoryList} 
                categoryPress={(item: any) => this.categorySelected(item)} 
                activeCategoryName={activeCategoryName}
                />
                <FlatList
                    data={products}
                    numColumns={2}
                    columnWrapperStyle={{
                        margin:5,
                        justifyContent: 'space-between',
                      }}
                    renderItem={({item,index}) => {
                        return (<ProductItem item={item} index={index} productClick={(item:any) => this.productClick(item) } />)
                    }}
                 />
                 <TouchableOpacity onPress={() => this.props.navigation.navigate('AddProduct')} style={s.fab}>
                    <Text style={s.plus}>+</Text>
                 </TouchableOpacity>
            </View>
        )
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999999',
        paddingTop: getStatusBarHeight()
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 40,
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'black'
    },
    plus: {
        fontSize: 30
    }
})