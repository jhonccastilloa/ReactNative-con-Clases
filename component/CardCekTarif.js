import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export class CardCekTarif extends Component {
  render() {
    const {color,serviceStatus,price} = this.props;
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text>Service</Text>
          <View style={[styles.cardInfoStatus, styles[color]]}>
            <Text style={styles.cardInfoText}>{serviceStatus}</Text>
          </View>
        </View>
        <View style={styles.cardMain}>
          <View style={{flex: 1}}>
            <Text style={styles.cardMainTitle}>Asal</Text>
            <Text style={styles.cardMainText}>Tasikmalaya</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.cardMainTitle}>Tujuan</Text>
            <Text style={styles.cardMainText}>Cianjur</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={styles.cardMainTitle}>Berat</Text>
            <Text style={styles.cardMainText}>1Kg</Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.cardTotal}>Total</Text>
          <Text style={styles.cardPrice}>Rp. {price}.000</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardInfoStatus: {
    backgroundColor: 'pink',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 20,
  },
  cardInfoText: {color: 'white'},
  cardMain: {
    flexDirection: 'row',
    marginVertical: 15,
    paddingBottom: 20,
    borderBottomColor: '#a5a5a5',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },

  cardMainTitle: {
    fontSize: 12,
    marginBottom: 10,
  },
  cardMainText: {
    fontWeight: '700',
    fontSize: 15,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontWeight: '700',
    fontSize: 15,
  },
  cardTotal: {
    color: '#a5a5a5',
    fontWeight: '700',
  },
  pink: {
    backgroundColor: '#ff4371',
  },
  green: {
    backgroundColor: '#6fcf97',
  },
  orange: {
    backgroundColor: '#f2994a',
  },
});
export default CardCekTarif;
