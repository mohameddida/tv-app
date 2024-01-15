import React from 'react';
import {FlatList, View} from 'react-native';

import Item from './Item';
import styles from './styles';
const PackageSwimLine = ({onPressItem, data}) => {
  //   const {data, isLoading, isEmpty, hasError} = usePopularMovies({
  //     fetch: true,
  //   });
  const isEmpty = false;
  const isLoading = false;
  const hasError = false;

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
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={isLoading && data.length === 0 ? new Array(6).fill(null) : data}
        renderItem={({item}) => (
          <Item
            id={item?.id}
            movie={item}
            image={item.img}
            onPressItem={onPressItem}
          />
        )}
      />
    </View>
  );
};

export default PackageSwimLine;
