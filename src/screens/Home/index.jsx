import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TVFocusGuideView,
  View,
} from 'react-native';
// import Play from '../assets/icons/playIcon.png';
import MainPage from '../../assets/images/formula.png';
// import EventFlatList from '../components/EventFlatList';
// import MenuBar from '../components/MenuBar';
import {Text} from 'react-native';
import iconOne from '../../assets/images/dazn031.png';
import iconTwo from '../../assets/images/dazn032.png';
import iconThree from '../../assets/images/dazn033.png';
import iconFourth from '../../assets/images/dazn034.png';
import iconFive from '../../assets/images/dazn035.png';
import MenuBar from '../../components/Menu';
import PackageSwimLine from '../Packages';
const Home = ({route, navigation}) => {
  const handleItemPress = item => {
    navigation.navigate(item.route, {id: item.id});
  };
  const idPack = route?.params?.idPack ?? 'default value';
  // const idPackage = useRef(idPack);
  const [details, setDetails] = useState();
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
  const showData = () => {
    setDetails(data.filter(item => item.id === idPack));
  };
  // useEffect(() => {
  //   showData();
  // }, []);

  return (
    <TVFocusGuideView style={styles.container}>
      <ImageBackground source={MainPage} style={styles.container}>
        <MenuBar />
        <View style={styles.content}>
          <View style={styles.textZone}>
            <Text style={styles.title}> {idPack}</Text>
            <Text style={styles.text}> {details?.desc} </Text>
          </View>
        </View>
        <View style={styles.listNav}>
          <PackageSwimLine
            navigation={navigation}
            data={data}
            onPressItem={handleItemPress}
          />
        </View>
      </ImageBackground>
    </TVFocusGuideView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 20,
  },
  textZone: {
    padding: 20,
    width: '80%',
    // marginHorizontal: 'auto',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  titleSub: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'rgba(36, 163, 255, 1)',
    paddingHorizontal: 20,
    paddingVertical: 15,
    maxWidth: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 2,
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  packageName: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  titleofpackage: {
    color: 'white',
    fontSize: 16,
  },
  listNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
