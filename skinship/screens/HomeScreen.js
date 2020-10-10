import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { useTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  
  const  { colors } = useTheme();
  const theme = useTheme();

    return (
      <ScrollView style={styles.container}>
        <StatusBar  barStyle= { theme.dark ? "light-content" :  "dark-content" }/>
        <View style={styles.sliderContainer}>
        <Swiper autoplay height={200}>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banner5.webp')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banner6.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banner3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banner4.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate ('BrowseScreen', {title: 'Browse'})}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="clipboard-list-outline" size={35} />
          </View>
          <Text style={styles.categoryBtnTxt}>Browse</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate ('CardListScreen',{title: 'Suggest'})}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="face-agent" size={35} />
          </View>
          <Text style={styles.categoryBtnTxt}>Suggest</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate ('AnalysisScreen',{title: 'Analysis'})}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="feature-search-outline" size={35} />
          </View>
          <Text style={styles.categoryBtnTxt}>Analysis</Text>
          </TouchableOpacity>
          

        </View>
        
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate ('QuestionScreen', {title: 'Questions'})}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="comment-question-outline" size={35} />
          </View>
          <Text style={styles.categoryBtnTxt}>Question</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate ('ReviewScreen',{title: 'Review'})}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="message-draw" size={35} />
          </View>
          <Text style={styles.categoryBtnTxt}>Review</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate ('MoreScreen',{title: 'More'})}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="chevron-down" size={35} />
          </View>
          <Text style={styles.categoryBtnTxt}>More</Text>
          </TouchableOpacity>
          

        </View>

        <View style={styles.cardsWrapper}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>Recently Added Products</Text>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/1.png')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Skinsistar V Acne Clear Booter & Cream</Text>
              <Text style={{color:'#c0c0c0'}}>Added about 1 hours Ago</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/2.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Skinsista Vit C Extra Bright Booter & Cream</Text>
              <Text style={{color:'#c0c0c0'}}>Added about 1 hours Ago</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/3.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>MoonA House -Essence Serum</Text>
              <Text style={{color:'#c0c0c0'}}>Added about 3 hours Ago</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/4.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>USTAR Vit C Pore Minimizing Botter Serum</Text>
              <Text style={{color:'#c0c0c0'}}>Added about 3 hours Ago</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/5.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Nivea Sun Protect&White</Text>
              <Text style={{color:'#c0c0c0'}}>Added about 3 hours Ago</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image 
                source={require('../assets/6.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Rojukiss CC Serum Acne Poreless</Text>
              <Text style={{color:'#c0c0c0'}}>Added about 5 hours Ago</Text>
            </View>
          </View>




        </View>
      </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#ffdbe9',
    borderRadius: 50,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#000',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },

});