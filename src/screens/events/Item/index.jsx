import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Touchable, withTouchable} from '../../../components/Touchable';
// import {useMovie} from 'store/movies/hooks';
import Card from '../../../components/Card';

import styles from './styles';

const PackagesItem = ({id, movie, image, onPressItem}) => {
  const {navigate} = useNavigation();

  return (
    <Touchable
      style={styles.container}
      onFocus={() => onPressItem(movie)}
      onPress={() =>
        navigate('EventsDetails', {
          id: movie.id,
        })
      }>
      <Card.Portrait id={id} item={movie} images={image} />
    </Touchable>
  );
};

export default memo(withTouchable(PackagesItem));
