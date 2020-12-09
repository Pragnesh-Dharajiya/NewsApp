import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flexContainer}>
        <Text>Hello</Text>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  tabBarContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#b43757',
  },
  button: {
    color: 'white',
    fontSize: 24,
  },
});

export default ProfileScreen;
