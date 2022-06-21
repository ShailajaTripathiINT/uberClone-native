import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const Form = ({ title}) => {
  const navigation=useNavigation();
  const validationSchema = Yup.object({
    fname: Yup.string().required('Please Enter Full Name'),
    pswd: Yup.string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
      ),
    phone: Yup.string()
      .required('Invalid Indian number')
      .matches(/(\+91\ )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/, {
        excludeEmptyString: false,
      }),
  });
  const renderError = message => (<View style={{alignItems:'center'}}>
  <Text style={{color:'red'}}>{message}</Text>
  </View>


  );

  const [data, setData] = useState([]);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '115750357117-ghv8ceepio8rqjgdfv376lqbtk1iq1i6.apps.googleusercontent.com',
    });
  }, [data]);

  async function onGoogleButtonPress() {
    console.log('pressed');
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log('===>idtoken', idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('googlecredential', googleCredential);
    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);
    console.log('usersign', user_sign_in);
    user_sign_in
      .then(user => {
        console.log('user.user.displayName', user.user.displayName);
        setData({
          name: user.user.displayName,
          email: user.user.email,
          image: user.user.photoURL,
        });
        navigation.navigate('HomeNavigation');
      })
      .catch(err => {
        console.log('err.message', err.message);
      });
    console.log('data.name', data.name);
  }
  function logout() {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        setData([]);
      });
  }

  return (
    <ScrollView style={styles.formContainer}>
      <Text style={styles.Head}> Welcome to {title} Page </Text>
      <Text style={styles.Text}>Please provide us deatils for {title}</Text>
      <View style={styles.formSection}>
        <Formik
          initialValues={{phone: '', pswd: '', fname: ''}}
          validationSchema={validationSchema}
          onSubmit={values => console.log('values', values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              {title === 'SignIn' ? (
                <>
                  <TextInput
                    placeholder="Mobile Number"
                    keyboardType="numeric"
                    placeholderTextColor="#777"
                    style={styles.input}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                  />
                  <ErrorMessage
                    name="phone"
                    render={renderError}
                    style={styles.error}
                  />
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="#777"
                    returnKeyType="go"
                    secureTextEntry
                    autoCorrect={false}
                    keyboardType="default"
                    style={styles.input}
                    onChangeText={handleChange('pswd')}
                    onBlur={handleBlur('pswd')}
                    value={values.pswd}
                  />
                  <ErrorMessage
                    name="pswd"
                    render={renderError}
                    style={styles.error}
                  />
                </>
              ) : (
                <>
                  <TextInput
                    placeholder="Full Name"
                    placeholderTextColor="#777"
                    returnKeyType="go"
                    keyboardType="default"
                    style={styles.input}
                    onChangeText={handleChange('fname')}
                    onBlur={handleBlur('fname')}
                    value={values.fname}
                  />
                  <ErrorMessage
                    name="fname"
                    render={renderError}
                    style={styles.error}
                  />
                  <TextInput
                    placeholder="Mobile Number"
                    keyboardType="numeric"
                    placeholderTextColor="#777"
                    style={styles.input}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                  />
                  <ErrorMessage
                    name="phone"
                    render={renderError}
                    style={styles.error}
                  />
                  <TextInput
                    placeholder="Set Password"
                    placeholderTextColor="#777"
                    returnKeyType="go"
                    secureTextEntry
                    autoCorrect={false}
                    keyboardType="default"
                    style={styles.input}
                    onChangeText={handleChange('pswd')}
                    onBlur={handleBlur('pswd')}
                    value={values.pswd}
                  />
                  <ErrorMessage
                    style={styles.error}
                    name="pswd"
                    render={renderError}
                  />
                </>
              )}
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => {
                  handleSubmit();
                  navigation.navigate('HomeNavigation');
                }}>
                <Text style={styles.textBtn}>{title}</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>

        {title === 'SignIn' ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotpwdScreen');
            }}>
            <Text style={styles.textForgot}>Forgot Your Password ?</Text>
          </TouchableOpacity>
        ) : null}

        <View style={styles.textSignupDiv}>
          <Text style={styles.textbottom}>
            {title === 'SignIn'
              ? "Don't have an account ? "
              : 'Already have an Account ? '}
          </Text>

          <TouchableOpacity
            onPress={() => {
              {
                title === 'SignIn'
                  ? navigation.navigate('SignupScreen')
                  : navigation.navigate('SigninScreen');
              }
            }}>
            <Text style={styles.signup}>
              {title === 'SignIn' ? 'Sign Up' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() =>
                onGoogleButtonPress().then(() =>
                  console.log('Signed in with Google!'),
                )
              }>
              <Image
                source={require('../../Assests/Images/google.png')}
                style={styles.iconImg}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                LoginManager.logInWithPermissions([
                  'pswd',
                  'phone',
                  'fname'
                ]).then(
                  function (result) {
                    if (result.isCancelled) {
                      alert('SignIn Cancelled ' + JSON.stringify(result));
                    } else {
                      alert(
                        'SignIn success with  permisssions: ' +
                          result.grantedPermissions.toString(),
                      );
                      alert('SignIn Success ' + result.toString());
                    }
                  },
                  function (error) {
                    alert('SignIn failed with error: ' + error);
                  },
                );
              }}>
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
    color: 'black',
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
  error: {
    color: 'red',
    backgroundColor: 'yellow',
    marginVertical: 10,
  },
});
