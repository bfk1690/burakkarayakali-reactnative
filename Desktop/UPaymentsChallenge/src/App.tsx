import * as React from 'react';
import { StatusBar, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { AppStack } from './router/navigation';

interface Props {}

interface State {}

export class Project extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
           <>
           
            <NavigationContainer>
               
                <AppStack />
            </NavigationContainer>
            </>
          
        )
    }
}