import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = ({props, navigation}) => {
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
