import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome  } from '@expo/vector-icons'; 


import AuthLoading from './authloading';
import SignIn from './signin';
import SignUp from './signup';
import Settings from './settings';
import BookScreen from './book';
import Feed from './feed';
import Favorites from './favorites';
import Profile from './profile';

const AuthStack = createStackNavigator({
    SignIn: SignIn,
    SignUp: SignUp
});

const FeedStack = createStackNavigator({
    Feed: Feed,
    Book: BookScreen
});

const FavoritesStack = createStackNavigator({
    Favorites: Favorites,
    Book: BookScreen
});

const ProfileStack = createStackNavigator({
    Profile: Profile,
    Book: BookScreen
});

const SettingsStack = createStackNavigator({
    Settings: Settings
});

const TabNavigator = createBottomTabNavigator({
    FeedScreen: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <MaterialCommunityIcons name="home" size={24} color="black" />
            )
        }
    },
    Favorites: {
        screen: FavoritesStack,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: () => (
                <MaterialIcons name="star" size={24} color="black" />
            )
        }
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
                <FontAwesome name="user-circle" size={24} color="black" />
            )
        }
    },
    Settings: {
        screen: SettingsStack,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: () => (
                <MaterialIcons name="settings" size={24} color={'black'} />
            )
        }
    }
});

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: AuthStack,
        App: TabNavigator
    },
    {
        initialRouteName: 'AuthLoading'
    }
);


export default createAppContainer(SwitchNavigator);