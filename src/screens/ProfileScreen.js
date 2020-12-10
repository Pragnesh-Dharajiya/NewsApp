import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={styles.MainContainer}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{alignItems: 'center'}}>
        <View style={{marginTop: hp('4%'), width: wp('80%')}}>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="First Name"
              placeholderTextColor="#9B9A9B"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Last Name"
              underlineColorAndroid="transparent"
              placeholderTextColor="#9B9A9B"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Email"
              underlineColorAndroid="transparent"
              placeholderTextColor="#9B9A9B"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="#9B9A9B"
            />
          </View>
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.TextInputStyleClass}
            placeholder="Phone"
            underlineColorAndroid="transparent"
            placeholderTextColor="#9B9A9B"
          />
        </View>
        <View style={{marginTop: hp('3%')}}>
          <TouchableOpacity style={styles.loginScreenButton}>
            <Text style={styles.loginText}>UPDATE</Text>
          </TouchableOpacity>
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
    backgroundColor: '#FFFFFF',
  },
  loginScreenButton: {
    width: wp('50%'),
    backgroundColor: 'orange',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#000',
    padding: 10,
    fontSize: wp('5%'),
  },

  ImageStyle: {
    marginLeft: wp('3%'),
    alignItems: 'center',
  },

  TextInputStyleClass: {
    flex: 1,
    fontSize: 17,
    color: '#030504',
    marginLeft: wp('3%'),
    paddingVertical: hp('1%'),
    
  },
  

  SectionStyle: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'orange',
  },
  
});

export default ProfileScreen;
