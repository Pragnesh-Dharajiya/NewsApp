import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions} from '@react-navigation/native';
import React, {Component, useEffect, useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  YellowBox,
  TextInput,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import store from '../redux/stores/store';

const LoginScreen = ({navigation}) => {
  const userinfo = {username: 'Admin', password: '12345'};
  let userData = {
    userFname: 'admin',
    userLname: 'admin',
    userEmail: 'admin@gmail.com',
    userDate: '01-01-2000',
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const _onLogin = () => {
    if (userinfo.username === username && userinfo.password === password) {
      AsyncStorage.setItem('userData', JSON.stringify(userData));
      store.dispatch({type: 'USER_DATA', payload: userData});
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    } else {
      alert('Please enter valid Username and Password');
    }
  };
  const _onChangeUsername = (text) => {
    setUsername(text);
  };

  const _onChangePassword = (text) => {
    setPassword(text);
  };

  return (
    <View style={styles.MainContainer}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{alignItems: 'center'}}>
        <View style={{marginTop: hp('15%')}}>
          <Image
            style={{resizeMode: 'contain', height: hp('20%'), width: 200}}
            source={require('../assets/image/ic_Apple_News.png')}></Image>
        </View>

        <View style={{marginTop: hp('10%'), width: wp('80%')}}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={{
                flex: 1,
                fontSize: 20,
                color: 'orange',
                marginLeft: wp('2%'),
              }}
              onChangeText={(text) => _onChangeUsername(text)}
              value={username}
              placeholder="Username"
              underlineColorAndroid="transparent"
              placeholderTextColor="orange"
            />
          </View>

          <View
            style={{
              height: 1,
              marginVertical: 10,
              backgroundColor: 'tomato',
              width: '100%',
            }}
          />

          <View style={styles.SectionStyle}>
            <TextInput
              style={{
                flex: 1,
                fontSize: 20,
                marginLeft: wp('2%'),
                color: 'orange',
              }}
              onChangeText={(text) => _onChangePassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="orange"
            />
          </View>
          <View style={{alignItems: 'flex-end', marginTop: hp('2%')}}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'orange',
                  fontSize: 17,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: hp('8%')}}>
            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={() => {
                _onLogin();
              }}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: hp('3%'),
            }}>
            <Text
              style={{
                color: 'orange',
                fontSize: 17,
                alignItems: 'center',
              }}>
              Don't have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'orange',
                  fontSize: 17,
                  marginLeft: 5,
                }}>
                Create Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <SafeAreaView />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  loginScreenButton: {
    width: wp('80%'),
    backgroundColor: 'tomato',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#030504',
    padding: 15,
    fontSize: wp('5%'),
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width: wp('70%'),
  },

  ImageStyle: {
    marginLeft: wp('3%'),
    alignItems: 'center',
  },
});

export default LoginScreen;
