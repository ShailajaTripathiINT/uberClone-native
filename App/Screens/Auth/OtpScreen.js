import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const OtpScreen = ({navigation}) => {
  const [OTP, setOTP] = useState('');
  const generateOTP = length => {
    const characters =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const characterCount = characters.length;
    let OTPvalue = '';
    for (let i = 0; i < length; i++) {
      OTPvalue += characters[Math.floor(Math.random() * characterCount)];
    }
    setOTP(OTPvalue);
    return OTPvalue;
  };

  return (
    <View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.textBtn}
          onPress={() => generateOTP(4)}
          //onPress={() => navigation.navigate('OtpScreen')}
        >
          Get OTP
        </Text>
      </TouchableOpacity>

      <Text style={styles.otp}>{OTP}</Text>

      {/* ---------------------------------------------------- */}

      <Text style={styles.forgotHead}>Enter OTP sent to Your Mobile Phone</Text>

      {/* --------------------------------------------------- */}
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            keyboardType="default"
            maxLength={1}
            style={styles.otpText}></TextInput>
        </View>
        <View style={styles.otpBox}>
          <TextInput
            keyboardType="default"
            maxLength={1}
            style={styles.otpText}></TextInput>
        </View>
        <View style={styles.otpBox}>
          <TextInput
            keyboardType="default"
            maxLength={1}
            style={styles.otpText}></TextInput>
        </View>
        <View style={styles.otpBox}>
          <TextInput
            keyboardType="default"
            maxLength={1}
            style={styles.otpText}></TextInput>
        </View>
      </View>
      {/* ------------------------------------------------ */}

      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.textBtn}
          onPress={() => navigation.navigate('HomeNavigation')}>
          SignIn
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  forgotHead: {
    fontSize: 20,
    color: 'black',
    marginVertical: 40,
    marginHorizontal: 5,
  },

  loginBtn: {
    margin: 12,
    borderRadius: 20,
    backgroundColor: 'green',
    padding: 12,
    borderWidth: 0.5,
    borderColor: '#DBDCDE',
  },
  textBtn: {
    color: 'white',
    textAlign: 'center',
  },
  otp: {
    color: '#1A5653',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },

  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 1,
    borderColor: '#1A5653',
    borderWidth: 0.9,
  },
  otpText: {
    fontSize: 25,
    color: 'black',
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
});
