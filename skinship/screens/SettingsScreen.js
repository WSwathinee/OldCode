import React, { useState } from "react";
import { View,  StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-community/picker';
import { Switch } from 'react-native-paper';

const SettingsScreen = () => {
  const [selectedValue, setSelectedValue] = useState("English");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>

     <View style={styles.userInfoSection}>
          <Text style={{paddingTop: 20, fontSize: 30, color:'#fff'}}>Settings</Text>
          
        </View>
      <View style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 30,

       }}>
         <Icon name= "alphabetical-variant" color="#fff" size={30} />
        <Text style={{color:'#fff' ,fontSize: 18, marginLeft: 20}}>Languauge</Text>
          <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 , color: '#fff',marginLeft: 80}}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="ไทย" value="ไทย" />
            <Picker.Item label="English" value="English" />
          </Picker>

    </View>
    <View style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 30,
          paddingTop: 25

       }}>
         <Icon name= "bell" color="#fff" size={30} />
        <Text style={{color:'#fff' ,fontSize: 18, marginLeft: 20}}>Notification</Text>
          <Switch 
            style={{marginLeft: 80}}
            value={isSwitchOn} 
            onValueChange={onToggleSwitch} 
          />
    </View>
    <View style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 30,
          paddingTop: 40

       }}>
         <Icon name= "thumb-up" color="#fff" size={30} />
        <Text style={{color:'#fff' ,fontSize: 18, marginLeft: 20}}>Follow Us</Text>
    </View>
    <View style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 30,
          paddingTop: 40

       }}>
         <Icon name= "help-circle" color="#fff" size={30} />
        <Text style={{color:'#fff' ,fontSize: 18, marginLeft: 20}}>Help</Text>
    </View>
    <View style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 30,
          paddingTop: 200

       }}>

        <Text style={{color:'#fff' ,fontSize: 15, marginLeft: 10}}>Version</Text>
        <Text style={{color:'#D3D3D3' ,fontSize: 15, marginLeft: 200}}>1.0.0</Text>
    </View>
    
    
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B03060',
   
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
  rowContainer: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    color: '#fff',
    fontSize: 20,

  },
});

