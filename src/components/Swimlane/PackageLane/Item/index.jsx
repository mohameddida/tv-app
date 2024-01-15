import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import Card from '../../../Card';
import {Touchable} from '../../../Touchable';
// import {useMovie} from 'store/movies/hooks';
import styles from './styles';

const PopularMoviesItem = ({id}) => {
  const {navigate} = useNavigation();
  let movie = [];
  // const movie = useMovie(id);
  if (!movie) {
    return <Card.Portrait.Shimmer />;
  }

  return (
    <Touchable style={styles.container} onPress={() => navigate('Home')}>
      <Card.Portrait item={movie} />
    </Touchable>
  );
};

export default memo(PopularMoviesItem);
