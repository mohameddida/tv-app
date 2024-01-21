/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  TVFocusGuideView,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Play from '../../assets/icons/playIcon.png';
import iconOne from '../../assets/images/daznEvent031.png';
import iconTwo from '../../assets/images/daznEvent032.png';
import iconThree from '../../assets/images/daznEvent033.png';
import iconFourth from '../../assets/images/daznEvent034.png';
import iconFive from '../../assets/images/daznEvent035.png';
import MainImage from '../../assets/images/images.jpeg';
import MenuBar from '../../components/Menu';
import {Touchable} from '../../components/Touchable';
import {size} from '../../styles';
import EventSwimLine from '../events';
const EventsScreen = ({route, navigation}) => {
  const data = [
    {
      id: 1,
      route: 'EventsDetails',
      img: iconOne,
      title: 'Dazen',
      desc: 'hello this is dazn screen packages',
      navigation: 'EventsDetails',
    },
    {
      id: 2,
      route: 'EventsDetails',
      img: iconTwo,
      title: 'Formula',
      desc: 'hello this is Formula screen',
      navigation: 'EventsDetails',
    },
    {
      id: 3,
      route: 'EventsDetails',
      img: iconThree,
      title: 'NBA',
      desc: 'hello this is NBA screen',
      navigation: 'EventsDetails',
    },
    {
      id: 4,
      route: 'EventsDetails',
      img: iconFourth,
      title: 'Motogp',
      desc: 'hello this is Motogp screen',
      navigation: 'EventsDetails',
    },
    {
      id: 5,
      route: 'EventsDetails',
      img: iconFive,
      title: 'EUROSPORT',
      desc: 'hello this is EURO SPORT screen',
      navigation: 'EventsDetails',
    },
  ];
  const handleItemPress = item => {
    navigation.navigate(item.route, {id: item.id});
  };
  const [isFocused, setIsFocused] = useState(false);

  const id = route.params?.idEvent ?? 'defaultId';
  const title = route.params?.name ?? 'default Title';
  //   const details = data.filter(item => item.id === route?.params?.id);
  return (
    <TVFocusGuideView style={styles.container} autoFocus>
      <ImageBackground source={MainImage} style={styles.container}>
        <LinearGradient
          colors={['#062A60', 'rgba(63, 59, 89, 0)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          <MenuBar />
          <View style={styles.content}>
            <View style={styles.textZone}>
              <Text style={styles.title}>TITOLO EVENTO</Text>
              <Text style={styles.titleSub}>SOTTO TITOLO EVENTO</Text>
              <Text style={styles.text}>
                consectetur adipiscing elit. Diam quis maecenas fermentum mattis
                eget lacus. Turpis urna nunc odio vel. Pharetra scelerisque
                turpis.
              </Text>
              <Touchable
                style={isFocused ? styles.button : styles.buttonActif}
                onBlur={() => setIsFocused(true)}
                onFocus={() => setIsFocused(false)}
                onPress={() => navigation.navigate('Player', {id})}>
                <Image source={Play} style={styles.icon} />
                <Text style={styles.buttonText}>Watch now</Text>
              </Touchable>
              <View style={styles.location}>
                <Text style={styles.packageName}>Dazn web {id}</Text>
                <Text style={styles.titleofpackage}>{title}</Text>
              </View>
            </View>
          </View>
          <View style={styles.listNav}>
            <EventSwimLine
              navigation={navigation}
              data={data}
              onPressItem={handleItemPress}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </TVFocusGuideView>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  textZone: {
    padding: 20,
    maxWidth: '60%',
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
    marginBottom: 10,
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
  buttonActif: {
    flexDirection: 'row',
    backgroundColor: 'rgba(36, 163, 255, 0.5)',
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
    width: '100%',
  },
  linearGradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    position: 'absolute',
    flex: 1,
    marginTop: 80,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: Platform.isTV
    ? {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: -size(50),
        padding: size(50),
      }
    : {},
});
