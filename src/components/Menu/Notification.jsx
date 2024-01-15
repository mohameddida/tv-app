import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import INotification from '../../assets/icons/notification_icon.png';

const ListItem = ({title}) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>* {title}</Text>
  </View>
);

const NotificationList = () => {
  const data = [
    {
      id: '1',
      title: 'Turpis urna nunc odio vel. Pharetra scelerisque turpis.',
    },
    {
      id: '2',
      title:
        'consectetur adipiscing elit.Diamques maecenas fermentum mattis ege',
    },
  ];

  return (
    <View style={styles.container}>
      <Image source={INotification} style={styles.icon} />
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <ListItem title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default NotificationList;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    padding: 20,
    zIndex: 1000,
    width: '30%',
    height: screenHeight,
    backgroundColor: 'gray',
    top: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Oswald',
    fontSize: 32,
    fontWeight: '300',
    lineHeight: 71,
    letterSpacing: 0.01,
  },
  icon: {
    width: 40,
    height: 40,
  },
  itemContainer: {
    padding: 20,
    marginVertical: 8,
    width: '100%',
  },
  itemText: {
    fontSize: 16,
    color: 'white',
    textDecorationStyle: 'dotted',
  },
});
