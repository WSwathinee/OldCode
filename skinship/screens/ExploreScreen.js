import React,{Component} from 'react';
import { View, TextInput, FlatList, StyleSheet, Text, Keyboard, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import RNPickerSelect from 'react-native-picker-select';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const listItems = ['SomeByMi AHA. BHA. PHA. 30 Days Miracle Toner','Biore Skin Care Facial Foam Rich Moisture',
'LOreal ParisSublime Glow Daily Moisturizer, for Fair Skin Tones','Hada Labo Gokujyun Lotion Refill Pouch','Estee Lauder Daywear Advanced Multi-Protection Anti-Oxidant Creme SPF 15',
'Naturie Hatomugi Skin Conditioner','La Roche-Posay Anthelios Invisible Spray SPF 50+','Sulwhasoo First Care Activating Serum EX']


class ExploreScreen extends Component{
  

    state = {
      searchBarFocused: false
    }

    componentDidMount() {
      this.KeyboardDidShow = Keyboard.addListener('keyboardDidShow', 
      this.KeyboardDidShow)
      this.KeyboardWillShow = Keyboard.addListener('keyboardWillShow', 
      this.KeyboardWillShow)
      this.KeyboardWillHide = Keyboard.addListener('keyboardWillHide', 
      this.KeyboardWillHide)

    }
      KeyboardDidShow = () => {
        this.setState( {searchBarFocused: true })

      }

      KeyboardWillShow = () => {
        this.setState( {searchBarFocused: true })

      }

      KeyboardWillHide = () => {
        this.setState( {searchBarFocused: false })

      }

  render(){
    return(
        <View style={{ flex:1 }}>
          <View style={{ height: 80, backgroundColor: '#B03060',justifyContent:'center', paddingHorizontal: 5 }}>
            <Animatable.View animation="slideInRight" duration={500} 
            style={{ 
              height: 50, 
              backgroundColor: '#fff' , 
              flexDirection: "row",
              padding: 5,
              alignItems: 'center'
              }}>
              <Animatable.View animation={this.state.searchBarFocused ? 
              "fadeInLeft" : "fadeInRight"} duration={400}>
                <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize:24 }} />
              </Animatable.View>
              <TextInput 
                placeholder="Search" 
                style={{
                  fontSize: 15, 
                  marginLeft: 15,
                  flex:1
                }}
              />
  
            </Animatable.View>
  
          </View>
          <View style={styles.container}>
          <Image 
                source={require('../assets/search.png')}
                style={{resizeMode:'contain',height:300, width:350}}
              />
              <Text style={{marginRight:260, fontWeight:'bold',fontSize:20}}>I am looking for</Text>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                { label: 'Toner', value: 'Toner'},
                { label: 'Cleaser', value: 'Cleanser' },
                { label: 'Facial Sunscreen', value: 'Facial Sunscreen' },
            ]}
        />
         <Text style={{marginRight:150, fontWeight:'bold',fontSize:20,paddingTop:5}}>My product preferences are</Text>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
            ]}
        />
            <View style={styles.button}>
                <TouchableOpacity onPress={() => {}}>
                <LinearGradient
                        colors={['#bd406f', '#c26185']}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Show Product</Text>
                        <MaterialIcons
                            name="navigate-next"
                            color='#fff'
                            size={20}
                        />
                    </LinearGradient>
                </TouchableOpacity>
                </View>

          </View>


               
          {/*<FlatList
            style={{backgroundColor:this.state.searchBarFocused ? 'rgba (0,0,0,0.3)' : 'white'}}
            data={listItems}
            renderItem={({item}) => <Text style={{ padding: 20, fontSize:15}}>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
  
          />*/}
  
        </View>
      

    );

  }

}

export default ExploreScreen;
   


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  content: {
    paddingTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,

  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
},
button: {
  alignItems: 'flex-end',
  marginTop: 10
},
signIn: {
  width: 150,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
  flexDirection: 'row'
},
  
});
