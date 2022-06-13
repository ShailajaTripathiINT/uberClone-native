import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const Form = props => {
  return (
    <ScrollView style={styles.formContainer}>
      <Text style={styles.Head}> Welcome to {props.title} Page </Text>
      <Text style={styles.Text}>Please fill for deatils for {props.title}</Text>
      <View style={styles.formSection}>
        {props.title === 'SignIn' ? (
          <>
            <TextInput
              placeholder="Mobile Number"
              keyboardType="numeric"
              placeholderTextColor="#777"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#777"
              returnKeyType="go"
              secureTextEntry
              autoCorrect={false}
              keyboardType="default"
              style={styles.input}
            />
          </>
        ) : (
          <>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#777"
              returnKeyType="go"
              secureTextEntry
              autoCorrect={false}
              keyboardType="default"
              style={styles.input}
            />
            <TextInput
              placeholder="Mobile Number"
              keyboardType="numeric"
              placeholderTextColor="#777"
              style={styles.input}
            />
            <TextInput
              placeholder="Set Password"
              placeholderTextColor="#777"
              returnKeyType="go"
              secureTextEntry
              autoCorrect={false}
              keyboardType="default"
              style={styles.input}
            />
          </>
        )}
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={()=>props.navigation.navigate("HomeNavigation")}
        >
          <Text style={styles.textBtn}>{props.title}</Text>
        </TouchableOpacity>

        {props.title === 'SignIn' ? (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ForgotpwdScreen');
            }}>
            <Text style={styles.textForgot}>Forgot Your Password ?</Text>
          </TouchableOpacity>
        ) : null}

        <View style={styles.textSignupDiv}>
          <Text style={styles.textbottom}>
            {props.title === 'SignIn'
              ? "Don't have an account ?"
              : 'Already have an Account ? '}
          </Text>

          <TouchableOpacity
            onPress={() => {
              {
                props.title === 'SignIn'
                  ?  props.navigation.navigate('SignupScreen')
                  :  props.navigation.navigate('SigninScreen');
              }
            }}>
            <Text style={styles.signup}>
              {props.title === 'SignIn' ? 'Sign Up' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.icons}>
            <TouchableOpacity>
              <Image
                source={require('../../Assests/Images/google.png')}
                style={styles.iconImg}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('../../Assests/Images/facebook.png')}
                style={styles.iconImg}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../Assests/Images/twitter.png')}
                style={styles.iconImg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  Head: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  formSection: {
    marginTop: 10,
  },
  textSignupDiv: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
  },
  formContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: 'black',
    backgroundColor: 'white',
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  Text: {
    color: '#999',
    textAlign: 'center',
  },
  input: {
    margin: 12,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#DBDCDE',
    color: '#999',
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
  textForgot: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
  },
  textbottom: {
    color: 'grey',
  },
  signup: {
    color: 'green',
  },

  icons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    alignItems: 'center',
  },
  iconImg: {
    width: 35,
    height: 35,
  },
});
