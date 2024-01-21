import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TVFocusGuideView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IDiscount from '../../assets/icons/discount_icon.png';
import ILogout from '../../assets/icons/logout_icon.png';
import INotification from '../../assets/icons/notification_icon.png';
import IPackage from '../../assets/icons/package_icon.png';
import logo from '../../assets/logo/logo.png';
import DiscountBar from './DiscountBar';
import NotificationList from './Notification';
const MenuBar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);

  const toggleNotifications = () => {
    setShowDiscount(false);
    setShowNotifications(!showNotifications);
  };
  const toggleDiscount = () => {
    setShowNotifications(false);
    setShowDiscount(!showDiscount);
  };

  const isActive = screenName =>
    route.name === screenName ? styles.activeButton : {};
  const [isFocused, setIsFocused] = useState(false);

  const handlePress = navigateTo => {
    navigation.navigate(navigateTo);
  };
  const hideNotifications = () => {
    setShowNotifications(false);
  };
  const hideDiscount = () => setShowDiscount(false);
  const hideAll = () => {
    hideDiscount();
    hideNotifications();
  };
  return (
    <TouchableWithoutFeedback onPress={hideAll}>
      <TVFocusGuideView autoFocus style={styles.container}>
        <LinearGradient
          colors={['#062A60', 'rgba(63, 59, 89, 0)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.linearGradient}>
          <View style={styles.sideContainer}>
            <TouchableOpacity
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onPress={() => handlePress('packages')}
              activeOpacity={1}
              style={[
                styles.btnMenu,
                isActive('packages'),
                isFocused ? styles.activeButton : null,
              ]}>
              <Image source={IPackage} style={styles.icon} />
              <Text style={styles.textNav}>Packages</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleDiscount}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              activeOpacity={0.6}
              style={[
                styles.btnMenu,
                isActive('Discount'),
                showDiscount ? styles.activeButton : null,
              ]}>
              <Image source={IDiscount} style={styles.icon} />
              <Text style={styles.textNav}>Discount zone</Text>
            </TouchableOpacity>
          </View>

          <Image source={logo} style={styles.logo} />

          <View style={styles.sideContainer}>
            <TouchableOpacity
              onPress={toggleNotifications}
              onFocus={() => setIsFocused(true)}
              activeOpacity={0.6}
              onBlur={() => setIsFocused(false)}
              style={styles.btnMenu}>
              <Image source={INotification} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress('login')}
              onFocus={() => setIsFocused(true)}
              activeOpacity={0.6}
              onBlur={() => setIsFocused(false)}
              style={styles.btnMenu}>
              <Image source={ILogout} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {showNotifications && (
          <NotificationList
            style={styles.notificationList}
            onClose={toggleNotifications}
          />
        )}

        {showDiscount && (
          <DiscountBar style={styles.DiscountList} onClose={toggleDiscount} />
        )}
      </TVFocusGuideView>
    </TouchableWithoutFeedback>
  );
};

export default MenuBar;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    // zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },

  linearGradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  sideContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  textNav: {
    color: 'white',
    fontSize: 16,
  },
  btnMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnMenuActive: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    color: 'gray',
  },
  textNavActive: {
    color: 'gray',
    fontSize: 18,
  },
  notificationList: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    width: screenWidth * 0.25,
    height: screenHeight,
    backgroundColor: 'gray',
  },
  DiscountList: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    left: 0,
    width: screenWidth * 0.25,
    height: screenHeight,
    backgroundColor: 'gray',
  },
  touchableArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
