import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import OrderConfirmation from '../containers/OrderConfirmation';

const StackNavigator = createStackNavigator({
  Main: Home,
  OrderConfirmation: OrderConfirmation,
}, {
    headerMode: 'none',
    navigationOptions: {
    headerVisible: false,
  }
 })

const StackContainer = createAppContainer(StackNavigator);

export { StackContainer };