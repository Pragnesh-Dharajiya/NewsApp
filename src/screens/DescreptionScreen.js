import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import WebView from 'react-native-webview';

const DescreptionScreen = ({navigation, route}) => {
  const URL = route.params.newsData;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{uri: URL}}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color="red"
              size="large"
              style={styles.flexContainer}
            />
          )}
        />
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

export default DescreptionScreen;
