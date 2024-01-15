import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import iconOne from '../../assets/images/dazn031.png';
import iconTwo from '../../assets/images/dazn032.png';
import iconThree from '../../assets/images/dazn033.png';
import iconFourth from '../../assets/images/dazn034.png';
import iconFive from '../../assets/images/dazn035.png';
import useComputedStyles from '../../hooks/useComputedStyles';
import PackageSwimLine from '../Packages';
import MainPage from '../assets/images/formulabg.png';
import CreateStyles from './styles';
const FormulaScreen = () => {
  const {bottom} = useSafeAreaInsets();

  const WrapperStyle = useComputedStyles(CreateStyles, {bottom});
  const data = [
    {
      id: 1,
      route: 'Packages',
      img: iconOne,
      title: 'Dazen',
      desc: 'hello this is dazn screen packages',
    },
    {
      id: 2,
      route: 'Formula',
      img: iconTwo,
      title: 'Formula',
      desc: 'hello this is Formula screen',
    },
    {
      id: 3,
      route: 'NBA',
      img: iconThree,
      title: 'NBA',
      desc: 'hello this is NBA screen',
    },
    {
      id: 4,
      route: 'Motogp',
      img: iconFourth,
      title: 'Motogp',
      desc: 'hello this is Motogp screen',
    },
    {
      id: 5,
      route: 'EUROSPORT',
      img: iconFive,
      title: 'EUROSPORT',
      desc: 'hello this is EURO SPORT screen',
    },
  ];
  const navigation = useNavigation();
  const handleItemPress = item => {
    navigation.navigate('Home', {
      itemId: item.id,
      itemName: item.name,
    });
  };
  return (
    <ImageBackground source={MainPage} style={styles.container}>
      {/* <MenuBar /> */}
      <View style={styles.body}>
        <View style={styles.textZone}>
          <Text style={styles.title}>FORMULA 1</Text>
          <Text style={styles.text}>
            consectetur adipiscing elit. Diam quis maecenas fermentum mattis
            eget lacus. Turpis urna nunc odio vel. Pharetra scelerisque turpis.
          </Text>
        </View>
      </View>
      <View style={styles.listNav}>
        <PackageSwimLine onPressItem={handleItemPress} data={data} />
      </View>
    </ImageBackground>
  );
};

export default FormulaScreen;
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textZone: {
    width: '50%',
    padding: 60,
  },
  text: {
    fontFamily: 'Calibri',
    fontWeight: '400',
    fontSize: 14,
    color: 'white',
    marginLeft: 50,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'Oswald',
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 50,
  },
});
