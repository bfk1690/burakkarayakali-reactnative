import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

//App Stack
const App = createNativeStackNavigator();

import {Home} from '../screens/Home';
import {ProductDetail} from '../screens/ProductDetail';
import {AddProduct} from '../screens/AddProduct';

class AppStack extends React.Component {
  render() {
    return (
      <App.Navigator
        initialRouteName={'Home'}>
        <App.Screen
          name="Home"
          component={Home}
          options={() => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
        <App.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={() => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
         <App.Screen
          name="AddProduct"
          component={AddProduct}
          options={() => ({
            animationEnabled: true,
            headerShown: false,
          })}
        />
      </App.Navigator>
    );
  }
}

export {AppStack};
