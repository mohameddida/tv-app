import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import IDiscount from '../../assets/icons/discount_icon.png';
import QRstyle from '../../assets/images/QR.png';

const DiscountBar = () => {
  return (
    <View style={styles.container}>
      <Image source={IDiscount} style={styles.icon} />
      <Text style={styles.title}>Discount zone</Text>
      <Text style={styles.Discription}>
        consectetur adipiscing elit. Diam quis maecenas fermentum mattis eget
        lacus. Turpis urna nunc odio vel. Pharetra scelerisque turpis{' '}
      </Text>
      <Image source={QRstyle} style={styles.QRstyle} />
    </View>
  );
};

export default DiscountBar;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'absolute',
    padding: 20,
    zIndex: 1000,
    width: '30%',
    height: screenHeight,
    backgroundColor: 'gray',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Oswald',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 71,
    letterSpacing: 0.01,
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  Discription: {
    fontFamily: 'Calibri',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.17 * 24,
    textAlign: 'left',
    color: 'white',
    marginBottom: 20,
  },
  QRstyle: {
    width: 150,
    height: 150,
  },
});
