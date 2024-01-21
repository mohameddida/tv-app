import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
// import {Touchable, withTouchable} from '../../../components/Touchable';
// import {useMovie} from 'store/movies/hooks';
import Card from '../../../components/Card';

import {TouchableOpacity} from 'react-native';
import {withTouchable} from '../../../components/Touchable';
import styles from './styles';

const PackagesItem = ({id, movie, image}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigate('EventsDetails', {
          id: movie.id,
        })
      }>
      <Card.Portrait id={id} item={movie} images={image} />
    </TouchableOpacity>
  );
};

export default memo(withTouchable(PackagesItem));
