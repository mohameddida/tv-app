import React, {memo} from 'react';
import {FlatList, Text, View} from 'react-native';
// import usePopularMovies from '../../store/popular-movies/hooks';
import Item from './Item';
import styles from './styles';

const PopularMoviesSwimlane = ({hideTitle}) => {
  //   const {data, isLoading, isEmpty, hasError} = usePopularMovies({
  //     fetch: true,
  //   });
  const isLoading = false;
  const isEmpty = false;
  const hasError = false;

  let data = [];
  if (isEmpty) {
    // render empty state?
    return null;
  }

  if (hasError) {
    // render error state?
    return null;
  }

  return (
    <View style={styles.container}>
      <View trapFocusLeft trapFocusRight>
        {!hideTitle && <Text style={styles.title}>Package</Text>}
        <FlatList
          contentContainerStyle={styles.flatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={isLoading && data.length === 0 ? new Array(6).fill(null) : data}
          renderItem={({item}) => <Item id={item?.id} />}
        />
      </View>
    </View>
  );
};

export default memo(PopularMoviesSwimlane);
