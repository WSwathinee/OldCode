import React, { Component } from 'react';


import { StyleSheet, TextInput, View, Alert, TouchableOpacity, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SocialButton from '../components/SocialButton'

export default class SignUpScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  registration_Function = () => {

    fetch('http://192.168.43.179/Skinship/registration_api.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        user_name: this.state.name,

        user_email: this.state.email,

        user_password: this.state.password

      })

    }).then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });


  }


  render() {
    return (
      

      <View style={styles.MainContainer}>
        <View style={{alignItems:'center'}}>
          <Text style={styles.txt}>Create an account</Text>
        </View>
        
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color='#05375a'
              size={20}
            
            />
            <TextInput
              placeholder="Your Username"
              autoCapitalize="none"
              onChangeText={data => this.setState({ name: data })}
              underlineColorAndroid='transparent'
              style={styles.textInput}
            />
          </View>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <Feather
              name="mail"
              color='#05375a'
              size={20}
            
            />
            <TextInput
              placeholder="Your Email"
              onChangeText={data => this.setState({ email: data })}
              underlineColorAndroid='transparent'
              style={styles.textInput}
            />
           


          </View>
          <Text style={styles.text_footer}>Password</Text>
          <View style={styles.action}>
            <Feather
              name="lock"
              color='#05375a'
              size={20}
            
            />
            <TextInput
              placeholder="Your Password"
              onChangeText={data => this.setState({ password: data })}
              underlineColorAndroid='transparent'
              style={styles.textInput}
              secureTextEntry={true}
            />
           


          </View>
          <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By registering, you confirm that accept our </Text>
                <TouchableOpacity onPress={() => alert('Term Clicked!')}>
                    <Text style={[styles.color_textPrivate,{color:'#e88832'}]}>Terms of service</Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate,{color:'#e88832'}]}>Privacy Policy</Text>
            </View>

          <View>
          <SocialButton
                buttonTitle="Sing Up with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            
            />
            <SocialButton
                buttonTitle="Sing Up with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            
            />

          </View>
          

          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.button} onPress={this.registration_Function} >

              <Text style={styles.text}>SignUp</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() =>navigation.navigate('SignInScreen')}>
                <Text style={styles.navButtonText}>Have an account? Sign In</Text>
            </TouchableOpacity>


          </View>
          



        

      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  logo: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
  txt: {
    fontFamily: 'SecularOne-Regular',
    fontSize: 28,
    marginBottom: 10,
    color: '#B03060',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
},
action: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5
},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
},

  button: {

    width: '100%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#B03060',
    borderRadius: 3,
    marginTop: 20
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#B03060',
  },



});