import {useNavigation, useRoute} from '@react-navigation/native';
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import Video from 'react-native-video';
import vd from '../../assets/Video/vediotest.mp4';
import PlayIcon from '../../assets/icons/playIcon.png';
import iconOne from '../../assets/images/daznEvent031.png';
import iconTwo from '../../assets/images/daznEvent032.png';
import iconThree from '../../assets/images/daznEvent033.png';
import iconFourth from '../../assets/images/daznEvent034.png';
import iconFive from '../../assets/images/daznEvent035.png';
import MenuBar from '../../components/Menu';
import PackageSwimLine from '../events';
import styles from './styles';
const PlayerScreen = ({route, navigation}) => {
  const {params} = useRoute();
  const {goBack} = useNavigation();
  const loading = false;
  const url =
    'https://www.youtube.com/watch?v=8CdcCD5V-d8&list=RDC3GouGa0noM&index=10';
  const videoError = data => {
    console.log(data);
  };
  const onBuffer = data => {
    console.log(data);
  };
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
  const [controlsVisible, setControlsVisible] = useState(true);
  const [swimLineVisible, setSwimLineVisible] = useState(true);
  const timerRef = useRef();

  const hideControls = useCallback(() => {
    setControlsVisible(false);
    // setSwimLineVisible(false);
  }, []);

  const resetTimer = useCallback(() => {
    setControlsVisible(true);
    // setSwimLineVisible(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      hideControls();
    }, 3000);
  }, [hideControls]);

  useEffect(() => {
    resetTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [resetTimer]);

  useEffect(() => {
    if (!loading && !url) {
      goBack();
    }
  }, [loading, url, goBack]);
  const handleItemPress = item => {
    navigation.navigate(item.route, {id: item.id});
  };
  const id = route.params?.id ?? 'defaultId';
  const title = route.params?.title ?? 'default title ';
  return (
    <TouchableWithoutFeedback onPress={resetTimer}>
      <View style={styles.container}>
        <View style={styles.content}>
          {controlsVisible && <MenuBar />}
          {controlsVisible && (
            <PackageSwimLine
              onPressItem={handleItemPress}
              data={data}
              style={styles.events}
            />
          )}
          {controlsVisible && (
            <View style={styles.titleChannel}>
              <Image source={PlayIcon} style={styles.playIcon} />
              <Text style={styles.titleText}>{title + id}</Text>
            </View>
          )}
          {!!url && (
            <Video
              style={styles.video}
              source={vd}
              controls
              resizeMode="cover"
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(PlayerScreen);
