import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TextInput, ScrollView, Alert, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import SocialButton from '../components/SocialButton'

import { AuthContext } from '../components/context';
import { useTheme } from 'react-native-paper';

import Users from '../components/users';
//import ForgotScreen from './ForgotScreen';



const SignInScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const  { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);
        
    const textInputChange = (val) => {
        if( val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8){
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });

        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });

        }
        
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry

        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length  >= 4){
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }

    }

    const loginHandle = (username, password) => {

        const foundUser = Users.filter( item =>{
            return username == item.username && password == item.password;

        });
        if ( data.username.length == 0 || data.password == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
 
        }
       if ( foundUser.length == 0 ) {
           Alert.alert('Invalid User!', 'Username or password is incorrect.', [
               {text: 'Okay'}
           ]);
           return;

       }
        signIn(foundUser);

    };

    return (
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                <Text style={styles.txt}>SignIn</Text>
              </View>

            <Animatable.View 
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color={colors.text}
                        size={20}

                    />
                    <TextInput
                        placeholder="Your Username"
                        style={[styles.textInput,{
                            color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </Animatable.View>
                    : null }
                </View>
                { data.isValidUser ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                </Animatable.View>
                }

                <Text style={[styles.text_footer, {
                    color: colors.text,
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color={colors.text}
                        size={20}

                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false }
                        style={[styles.textInput,{
                            color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}

                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color="grey"
                            size={20}
                         />
                        }
                    </TouchableOpacity>
                </View>
                { data.isValidPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                </Animatable.View>
                }
                    <TouchableOpacity /*onPress={() => navigation.navigate()}*/>
                        <Text style={{color: '#B03060', marginTop:15}}>Forgot password?</Text>
                    </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {loginHandle( data.username, data.password)}}
                    >
                    <LinearGradient 
                        colors={['#bd406f', '#c26185']}
                        style={styles.signIn}
                    >
                            <Text style={[styles.textSign, {
                                color:'#fff'
                            }]}>Sign In</Text>

                    </LinearGradient>
                    </TouchableOpacity>
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

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {
                            borderColor: '#B03060',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#B03060'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
                    

                </View>

            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#B03060',
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop:20
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
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    txt: {
        fontFamily: 'SecularOne-Regular',
        fontSize: 40,
        marginBottom: 10,
        color: '#B03060',
        paddingTop:30
      },
  });