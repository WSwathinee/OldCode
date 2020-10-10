import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SupportScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
        <View style={styles.userInfoSection}>
          <Text style={{paddingTop: 20, fontSize: 30, color:'#fff'}}>Contact Us</Text>
          
        </View>
        
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name= "email-outline" color="#ffffff" size={20} />
              <Text style={{color:"#ffffff", marginLeft: 20}}>Skinship@gmail.com</Text>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name= "phone" color="#ffffff" size={20} />
              <Text style={{color:"#ffffff", marginLeft: 20}}>0123456789</Text>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name= "map-marker" color="#ffffff" size={20} />
              <Text style={{color:"#ffffff", marginLeft: 20}}>Walailak University</Text>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name= "facebook" color="#ffffff" size={20} />
              <Text style={{color:"#ffffff", marginLeft: 20}}>Skinship</Text>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name= "twitter" color="#ffffff" size={20} />
              <Text style={{color:"#ffffff", marginLeft: 20}}>Skinship</Text>
            </View>
          </View>
          <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            borderColor: '#fff',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Sign Out</Text>
          </TouchableOpacity>

      </View>
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#B03060'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    //alignItems: 'center',
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
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#ffffff',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
