import {useHeaderHeight} from '@react-navigation/elements';
import {useIsFocused, useRoute} from '@react-navigation/native';
import React, {memo, useEffect} from 'react';
import {ScrollView, TVEventControl, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useComputedStyles} from '../../hooks/useComputedStyles';

import {Route} from '../../navigation';
import createStyles from './styles';

const ScreenWrapper = ({children, style, contentStyle}) => {
  const isFocused = useIsFocused();
  const {name: route} = useRoute();
  const {height} = useWindowDimensions();
  const {top, bottom} = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    if (isFocused) {
      if (Route.Home === route) {
        TVEventControl.disableTVMenuKey();
      } else {
        TVEventControl.enableTVMenuKey();
      }
    }
  }, [route, isFocused]);
  const styles = useComputedStyles(createStyles, {
    height,
    headerHeight,
    top,
    bottom,
  });
  return (
    <ScrollView
      style={styles.contentContainer}
      contentContainerStyle={[styles.content, contentStyle]}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}>
      {children}
    </ScrollView>
  );
};

export default memo(ScreenWrapper);
