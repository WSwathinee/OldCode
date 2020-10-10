import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import files from '../assets/fileBase64';

const ProfileScreen = ({navigation}) => {
  
  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Skinship app',
      url: files.appLogo,
      
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };
  

    return (
      <View style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection:'row', marginTop: 15}}>
            <Avatar.Image
              source={{
                uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
              }}
              size={80}
            />
            <View style={{marginLeft: 20}}>
              <Title style={[styles.title, {
                marginTop: 15,
                marginBottom: 5,
              }]}>Wathinee Saeaui</Title>
              <Caption style={styles.caption}>@WSwathinee</Caption>
            </View>
          </View>
        </View>
        
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name= "account-outline" color="#777777" size={20} />
              <Text style={{color:"#777777", marginLeft: 20}}>WSwathinee</Text>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name= "email-outline" color="#777777" size={20} />
              <Text style={{color:"#777777", marginLeft: 20}}>Wathinee477@gmail.com</Text>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name= "phone" color="#777777" size={20} />
              <Text style={{color:"#777777", marginLeft: 20}}>0123456789</Text>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.row}>
                <Icon name="account-details-outline" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>Details</Text>
              </View>
            </TouchableRipple>
          </View>
          <View style={styles.userInfoSection}>
            <TouchableRipple onPress={myCustomShare}>
              <View style={styles.row}>
                <Icon name="share-outline" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>Tell Your Friend</Text>
              </View>
            </TouchableRipple>
          </View>
          <View style={styles.userInfoSection}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.row}>
                <Icon name="cog-outline" color="#777777" size={20} />
                <Text style={{color:"#777777", marginLeft: 20}}>Settings</Text>
              </View>
            </TouchableRipple>
          </View>
          
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    //alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
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
    //marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    //paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
