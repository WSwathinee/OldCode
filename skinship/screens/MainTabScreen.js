import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import EditProfileScreen from './EditProfileScreen';
import CardListScreen from './CardListScreen';
import BrowseScreen from './BrowseScreen';
import AnalysisScreen from './AnalysisScreen';
import WishListScreen from './WishListScreen';
import QuestionScreen from './QuestionScreen';
import ReviewScreen from './ReviewScreen';
import MoreScreen from './MoreScreen';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const WishListStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
            tabBarLabel: 'Home',
            tabBarColor: '#B03060',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Search"
            component={ExploreScreen}
            options={{
            tabBarLabel: 'Search',
            tabBarColor: '#B03060',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-search" color={color} size={26} />
                ),
             }}
        />
        <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
            tabBarLabel: 'Notifications',
            tabBarColor: '#B03060',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#B03060',
            tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Wishlist"
            component={WishListStackScreen}
            options={{
            tabBarLabel: 'Wishlist',
            tabBarColor: '#B03060',
            tabBarIcon: ({ color }) => (
                <Icon name="heart" color={color} size={26} />
                ),
             }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#B03060',
            shadowColor: '#fff',
            elevation: 0
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:'SkinShip',
            headerLeft: () => (
              <View style={{marginLeft:10}}>
              <Icon.Button 
                name="ios-menu" 
                size={25}
                color='#fff'
                backgroundColor="#B03060" 
                onPress={() => navigation.openDrawer ()}>
              </Icon.Button>
              </View>
            ),
            
  
          }}    
          />
          <HomeStack.Screen
            name="CardListScreen"
            component={CardListScreen} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
          />
          <HomeStack.Screen
            name="BrowseScreen"
            component={BrowseScreen} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
          />
          <HomeStack.Screen
            name="AnalysisScreen"
            component={AnalysisScreen} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
          />
          <HomeStack.Screen
            name="QuestionScreen"
            component={QuestionScreen} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
          />
          <HomeStack.Screen
            name="ReviewScreen"
            component={ReviewScreen} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
          />
          <HomeStack.Screen
            name="MoreScreen"
            component={MoreScreen} 
            options={({route}) => ({
              title: route.params.title,
              headerBackTitleVisible: false

            })}
          
          />
          
        </HomeStack.Navigator>
  );
  
  const NotificationStackScreen = ({navigation}) => (
    <NotificationStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#B03060'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
          <NotificationStack.Screen name="Notifications" component={NotificationScreen} options={{
              headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                backgroundColor="#B03060" onPress={() => navigation.openDrawer ()}>
                </Icon.Button>
              )
          }}    />
        </NotificationStack.Navigator>
  );

  
  const ProfileStackScreen = ({navigation}) => (
    
    <ProfileStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#B03060',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
          <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
              headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                backgroundColor="#B03060" onPress={() => navigation.openDrawer ()}>
                </Icon.Button>
              ),
              headerRight: () => (
                <View style={{marginRight: 10}}>
                  <MaterialCommunityIcons.Button
                    name="account-edit"
                    backgroundColor="#B03060"
                    size={25}
                    onPress={() => navigation.navigate('EditProfile')}
                  />
                </View>
              ),
            }}
          />
          <ProfileStack.Screen
            name="EditProfile"
            options={{
              title: 'Edit Profile',
            }}
            component={EditProfileScreen}
          />
        </ProfileStack.Navigator>
        
  );
  const WishListStackScreen = ({navigation}) => (
    <WishListStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#B03060'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
          <WishListStack.Screen name="Wishlist" component={WishListScreen} options={{
              headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                backgroundColor="#B03060" onPress={() => navigation.openDrawer ()}>
                </Icon.Button>
              )
          }}    />
        </WishListStack.Navigator>
  );
