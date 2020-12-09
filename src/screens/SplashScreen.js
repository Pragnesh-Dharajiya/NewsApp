
import React from 'react';
import {View, Text, Button, ImageBackground, StyleSheet} from 'react-native';

const SplashScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Newzzz</Text>
          <Text style={styles.logoDescription}>
            Get your doze of daily news!
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  logoDescription: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
});

export default SplashScreen;
