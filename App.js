/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import CardCekTarif from './component/CardCekTarif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          serviceStatus: 'One Day Service',
          price: 150,
          color: 'pink',
        },
        {
          id: 2,
          serviceStatus: 'Regular',
          price: 50,
          color: 'orange',
        },
        {
          id: 3,
          serviceStatus: 'Ekonomi',
          price: 30,
          color: 'green',
        },
        {
          id: 4,
          serviceStatus: 'Express Document',
          price: 30,
          color: 'pink',
        },
      ],
    };
  }
  render() {
    const {data} = this.state;
    return (
      <ScrollView style={styles.container}>
        {data.map(el => (
          <CardCekTarif
            key={el.id}
            color={el.color}
            price={el.price}
            serviceStatus={el.serviceStatus}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
});

export default App;
