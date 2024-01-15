import MaskedView from '@react-native-masked-view/masked-view';
import {useNavigation} from '@react-navigation/native';
import {usePreviousValue} from 'beautiful-react-hooks/usePreviousValue';
import {default as React, useCallback, useMemo} from 'react';
import {Alert, Platform, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import useComputedStyles from '../../../hooks/useComputedStyles';
import Route from '../../../navigation/routes';
import FastImageBackground from '../../FastImageBackground';
import BackButton from './Backbuttom/index';
import WatchTrailer from './WatchTrailer';
import createStyles from './styles';
const HeroCard = ({item}) => {
  const {bottom} = useSafeAreaInsets();
  const styles = useComputedStyles(createStyles, {bottom});
  const {goBack, navigate} = useNavigation();
  const isLoading = false;
  const isEmpty = false;
  const fetch = false;
  const data = null;
  const wasLoading = usePreviousValue(isLoading);
  const youTubeId = useMemo(() => {
    return data?.[0]?.key || null;
  }, [data]);
  const movie = '';
  const backgroundImageUrl = useMemo(() => {
    return item.backdrop_url;
  }, [item?.backdrop_url]);

  const onWatchTrailerPress = useCallback(() => {
    if (isEmpty) {
      Alert.alert('No trailers available');
      return;
    }

    if (youTubeId) {
      navigate(Route.Player, {youTubeId});
    }

    fetch();
  }, [fetch, youTubeId, navigate, isEmpty]);
  return (
    <View style={styles.header}>
      <MaskedView
        renderToHardwareTextureAndroid
        style={styles.mask}
        maskElement={
          <LinearGradient
            style={styles.gradient}
            angle={10}
            useAngle
            colors={[
              'rgba(255, 255, 255, 0)',
              'rgba(255, 255, 255, 0.1)',
              'rgba(255, 255, 255, 0.2)',
              'rgba(255, 255, 255, 0.3)',
              'rgba(255, 255, 255, 0.4)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.75)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.25)',
              'rgba(255, 255, 255, 0)',
            ]}
          />
        }>
        <FastImageBackground
          style={styles.image}
          source={{uri: item.backdrop_url}}
        />
      </MaskedView>
      <View style={styles.content}>
        {Platform.isTV && <BackButton onPress={goBack} />}
        <View style={styles.spacer} />
        <Text
          style={styles.title}
          adjustsFontSizeToFit
          numberOfLines={Platform.isTV ? 1 : 2}>
          {item.type === 'movie'}
          {/*  ? (item as Movie).title : null */}
          {item.type === 'show'}
          {/*  ? (item as Show).name : null */}
        </Text>
        <View style={styles.details}>
          {!!item.overview && (
            <Text
              style={styles.overview}
              numberOfLines={Platform.isTV ? 4 : undefined}>
              {item.overview}
            </Text>
          )}
          <View style={styles.watchTrailer}>
            <WatchTrailer onPress={onWatchTrailerPress} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeroCard;
