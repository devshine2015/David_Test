import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

class OrderConfirmation extends Component {

  constructor() {
    super()
    this.state = {
      textSelected: '',
      finalPrice: 0,
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    checkedFlavors = navigation.getParam('checkedFlavors', []);
    let textSelected = '';
    let finalPrice = 0;
    checkedFlavors.map(item => {
      textSelected = textSelected + " " + item.name;
      finalPrice = finalPrice + item.price;
    })

    if (checkedFlavors.length > 1) {
      finalPrice = finalPrice / 2;
    }
    this.setState({
      textSelected,
      finalPrice
    })
  }

  back = () => {
    const { navigation } = this.props;
    navigation.navigate('Main')
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>{this.state.textSelected} Ordered</Text>
        <Text>Final Price {this.state.finalPrice} $</Text>
        <Text>Order Completed</Text> 
        <Button title="Back to Order Page" onPress={this.back} />
      </View>
    );
  }
}

export default OrderConfirmation;
