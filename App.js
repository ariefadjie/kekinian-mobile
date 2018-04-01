import React, { Component } from 'react';
import { StackNavigator} from 'react-navigation';

import Home from './src/components/Home';
import Detail from './src/components/Detail';
import Review from './src/components/Review';

const RootStack = StackNavigator(
  {
    Home: { screen: Home },
    Detail: { screen: Detail },
    Review: { screen: Review }
  },
  {
    initialRouteName : 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5EB660',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends Component{
  render(){
    return <RootStack/>;
  }
}