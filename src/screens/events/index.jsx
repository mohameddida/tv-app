import React, {useState} from 'react';
import {ScrollView, TVFocusGuideView} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Card from '../../components/Card';
import {useTouchable} from '../../components/Touchable';
import useComputedStyles from '../../hooks/useComputedStyles';
import CreateStyles from './styles';
const PackageSwimLine = ({data, route}) => {
  //   const {data, isLoading, isEmpty, hasError} = usePopularMovies({
  //     fetch: true,
  //   });
  const {hasFocus} = useTouchable();
  const styles = useComputedStyles(CreateStyles, {
    hasFocus,
  });
  const isEmpty = false;
  const isLoading = false;
  const hasError = false;
  const [focus, setFocus] = useState();
  const {navigate} = useNavigation();
  if (isEmpty) {
    // render empty state?
    return null;
  }
  if (hasError) {
    // render error state?
    return null;
  }
  return (
    <TVFocusGuideView autoFocus style={styles.container}>
      <ScrollView style={styles.FlatList} horizontal>
        {data.map((pack, index) => (
          <Card.CardEvent
            images={pack.img}
            key={index}
            idEvent={pack.id}
            event={pack}
          />
        ))}
      </ScrollView>
    </TVFocusGuideView>
  );
};

export default PackageSwimLine;
