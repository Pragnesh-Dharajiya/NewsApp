import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {CommonActions} from '@react-navigation/native';
import store from '../redux/stores/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomSidebarMenu = ({props, navigation}) => {
  const _onLogout = () => {
    Alert.alert('Confirm', 'Are you sure that you want to logout?', [
      {
        text: 'Yes',
        onPress: () => {
          store.dispatch({type: 'USER_DATA', payload: ''});
          AsyncStorage.removeItem('userData');
          //navigation.navigate("SignIn");
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'SignIn'}],
            }),
          );
        },
      },
      {text: 'Cancel'},
    ]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={require('../assets/image/ic_Apple_News.png')}
        style={styles.sideMenuProfileIcon}
      />
      <Text style={styles.sideMenuText}>News Application</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={({tintColor}) => (
            <Image
              source={require('../assets/image/ic_home.png')}
              resizeMode="contain"
              style={styles.DrawerMenuIcon}
            />
          )}
          label="Home"
          labelStyle={styles.drawerMenuText}
          onPress={() => navigation.navigate('homescreen')}
        />

        <DrawerItem
          icon={({tintColor}) => (
            <Image
              source={require('../assets/image/ic_news.png')}
              resizeMode="contain"
              style={styles.DrawerMenuIcon}
            />
          )}
          label="Latest News"
          labelStyle={styles.drawerMenuText}
        />
        <DrawerItem
          icon={({tintColor}) => (
            <Image
              source={require('../assets/image/ic_list-text.png')}
              resizeMode="contain"
              style={styles.DrawerMenuIcon}
            />
          )}
          label="Categories"
          labelStyle={styles.drawerMenuText}
        />
        <DrawerItem
          icon={({tintColor}) => (
            <Image
              source={require('../assets/image/ic_heart.png')}
              resizeMode="contain"
              style={styles.DrawerMenuIcon}
            />
          )}
          label="Favourite"
          labelStyle={styles.drawerMenuText}
        />
        <DrawerItem
          icon={({tintColor}) => (
            <Image
              source={require('../assets/image/ic_user.png')}
              resizeMode="contain"
              style={styles.DrawerMenuIcon}
            />
          )}
          label="Profile"
          labelStyle={styles.drawerMenuText}
          onPress={() => navigation.navigate('profilescreen')}
        />
        <DrawerItem
          icon={({tintColor}) => (
            <Image
              source={require('../assets/image/ic_logout.png')}
              resizeMode="contain"
              style={styles.DrawerMenuIcon}
            />
          )}
          label="Logout"
          onPress={() => {
            _onLogout();
          }}
          labelStyle={styles.drawerMenuText}
        />
        {/* <View style={styles.customItem}>
          <Text>Rate Us</Text>
        </View> */}
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey',
        }}>
        www.TecoCraft.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  DrawerMenuIcon: {width: 22, height: 22},
  drawerMenuText: {
    fontSize: 20,
    marginLeft: -15,
  },
  sideMenuText: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 10,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
