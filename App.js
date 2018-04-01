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
  }
);

export default class App extends Component{
  render(){
    return <RootStack/>;
  }
}