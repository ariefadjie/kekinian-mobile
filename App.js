import React, { Component } from 'react';
import { StackNavigator} from 'react-navigation';

import Home from './src/views/Home';
import Detail from './src/views/Detail';
import Review from './src/views/Review';

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