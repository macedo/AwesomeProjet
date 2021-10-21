import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-ui-kitten'

import AuthLoading from './authloading';
import SignInScreen from './signin';
import SignUpScreen from './signup';
import Settings from './settings';
import BookScreen from './book';
import Feed from './feed';
import Search from './search';
import Profile from './profile';
import AddPost from './addPost';

const AuthStack = createStackNavigator({
    SignIn: {
        screen: SignInScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            headerShown: false
        }
    }
});

const FeedStack = createStackNavigator({
    Feed: Feed,
    Book: BookScreen
});

const SearchStack = createStackNavigator({
    Search: Search,
});

const AddPostStack = createStackNavigator({
    AddPost: AddPost
});

const ProfileStack = createStackNavigator({
    Profile: Profile,
    Book: BookScreen
});

const SettingsStack = createStackNavigator({
    Settings: Settings
});

const TabNavigator = createBottomTabNavigator(
    {
        Feed: {
            screen: FeedStack,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name='home-outline'
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        },
        Search: {
            screen: SearchStack,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name='search-outline'
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        },
        AddPost: {
            screen: AddPostStack,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name='plus-square-outline'
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        },
        Settings: {
            screen: SettingsStack,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name='heart-outline'
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name='person-outline'
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false
        }
    }
);

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: AuthStack,
        App: TabNavigator
    },
    {
        initialRouteName: 'Auth'
    }
);


export default createAppContainer(SwitchNavigator);
