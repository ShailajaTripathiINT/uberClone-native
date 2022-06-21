import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import PhoneInput from 'react-native-phone-number-input';

const ForgotpwdScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.forgotHead}>
        Enter Your Mobile Number to Send an OTP
      </Text>
      
      <PhoneInput
        defaultCode="IN"
        layout="first"
        countryPickerProps={{withAlphaFilter: true}}
        autoFocus
      />
      {/* ---------------------------------------------------------- */}

      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.textBtn}
          onPress={() => navigation.navigate('OtpScreen')}>
          Submit Number
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotpwdScreen;

const styles = StyleSheet.create({
  forgotHead: {
    fontSize: 20,
    color: 'black',
    marginVertical: 40,
    marginHorizontal: 5,
  },
  loginBtn: {
    margin: 25,
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
 
});
