import React, {Component} from 'react';
import { View, Text, ActivityIndicator, Button, Alert} from 'react-native';
import { CheckBox } from 'react-native-elements'

import styles from './styles';

class Home extends Component {

  constructor() {
    super()
    this.state = {
      flavors: []
    }
  }

  componentDidMount() {
    const { getFlavors } = this.props;
    getFlavors().then(result => {
      let flavors = [];
      result.map(item => {
        item.checked = false;
        flavors.push(item)
      })
      this.setState({
        flavors
      })
    })
  }

  orderPizza = () => {
    const { navigation } = this.props;
    const checkedFlavors = this.state.flavors.filter(item => item.checked === true);
    const lengthOfChecked = checkedFlavors.length;
    if (lengthOfChecked > 0 ) {
      navigation.navigate('OrderConfirmation', {
        checkedFlavors,
      });
    } else {
      Alert.alert(
        'Alert',
        'You should select at least one flavor',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
    
  }

  selectFlavor = (index) => {
    const lengthOfChecked = this.state.flavors.filter(item => item.checked === true).length

    if (lengthOfChecked > 1 && this.state.flavors[index].checked === false) {
      
      Alert.alert(
        'Alert',
        'You should not check more than 2 flavors',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
      return
    }
    let flavors = this.state.flavors;
    flavors[index].checked = !flavors[index].checked;
    this.setState({
      flavors
    })
  }

  renderFlavors = (flavors) => {
    if ( !flavors ) {
      return
    }
    return flavors.map( (item, index ) => {
      return (
        <View key={item.id} style={styles.itemWrapper}>
          <CheckBox
            title={item.name}
            containerStyle={styles.checkBox}
            checked={item.checked}
            onPress={() => this.selectFlavor(index)}
          />
          <Text>{item.price}$</Text>
        </View>
      )
    })
  }
  render() {
    const { flavorsLoading } = this.props;
    const { flavors } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Create a New Pizza</Text>
        <View style={styles.itemContainer}>
          {
            flavorsLoading === true ?
          <ActivityIndicator size="small" color="#00ff00" /> :
            this.renderFlavors(flavors)
          }
        </View>
        <Button title="Order" onPress={this.orderPizza}/>
      </View>
    );
  }
}

export default Home;
