import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import iconOne from '../../assets/images/dazn031.png';
import iconTwo from '../../assets/images/dazn032.png';
import iconThree from '../../assets/images/dazn033.png';
import iconFourth from '../../assets/images/dazn034.png';
import iconFive from '../../assets/images/dazn035.png';
import MainImage from '../../assets/images/images.jpeg';
import MenuBar from '../../components/Menu';
const EventsDetailsScreen = () => {
  const data = [
    {
      id: 1,
      route: 'packages',
      img: iconOne,
      title: 'Dazen',
      desc: 'hello this is dazn screen packages',
      navigation: 'EventsDetails',
    },
    {
      id: 2,
      route: 'packages',
      img: iconTwo,
      title: 'Formula',
      desc: 'hello this is Formula screen',
      navigation: 'EventsDetails',
    },
    {
      id: 3,
      route: 'packages',
      img: iconThree,
      title: 'NBA',
      desc: 'hello this is NBA screen',
      navigation: 'EventsDetails',
    },
    {
      id: 4,
      route: 'packages',
      img: iconFourth,
      title: 'Motogp',
      desc: 'hello this is Motogp screen',
      navigation: 'EventsDetails',
    },
    {
      id: 5,
      route: 'packages',
      img: iconFive,
      title: 'EUROSPORT',
      desc: 'hello this is EURO SPORT screen',
      navigation: 'EventsDetails',
    },
  ];
  return (
    <ImageBackground source={MainImage} style={styles.container}>
      <MenuBar />
    </ImageBackground>
  );
};

export default EventsDetailsScreen;

const styles = StyleSheet.create({});
