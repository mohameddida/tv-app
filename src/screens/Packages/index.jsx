import {useHeaderHeight} from '@react-navigation/elements';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import React, {memo, useEffect} from 'react';
import {
  ScrollView,
  TVEventControl,
  TVFocusGuideView,
  useWindowDimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Card from '../../components/Card';
import {withTouchable} from '../../components/Touchable';
import useComputedStyles from '../../hooks/useComputedStyles';
import {Route} from '../../navigation';
import CreateStyles from './styles';
const EventSwimLine = ({data}) => {
  //   const {data, isLoading, isEmpty, hasError} = usePopularMovies({
  //     fetch: true,
  //   });

  const {navigate} = useNavigation();
  const isEmpty = false;
  const isLoading = false;
  const hasError = false;
  const {hasFocus} = withTouchable();
  const isFocused = useIsFocused();
  const {name: route} = useRoute();
  const {height} = useWindowDimensions();
  const {top, bottom} = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    if (isFocused) {
      if (Route === route) {
        // exit on back press
        TVEventControl.disableTVMenuKey();
      } else {
        // navigate back on back press
        TVEventControl.enableTVMenuKey();
      }
    }
  }, [route, isFocused]);
  const styles = useComputedStyles(CreateStyles, {
    height,
    headerHeight,
    top,
    bottom,
    hasFocus,
  });

  if (isEmpty) {
    return null;
  }

  if (hasError) {
    return null;
  }

  return (
    <TVFocusGuideView style={styles.container} autoFocus>
      <ScrollView style={styles.FlatList} horizontal>
        {data.map((pack, index) => (
          <Card.Portrait
            images={pack.img}
            name={pack.name}
            idPack={pack.id}
            key={index}
            hasTVPreferredFocus={pack === 0 && index === 0}
          />
        ))}
      </ScrollView>
    </TVFocusGuideView>
  );
};

export default memo(EventSwimLine);
