import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { ThemeContext } from '../theme-context';

const Settings = props => {

    const themeContext = useContext(ThemeContext);
    //remove the token and navigate to the Auth screen
    const signOut = () => {
        SecureStore.deleteItemAsync('token').then(
            props.navigation.navigate('Auth')
        );
    };

    return (
        <View>
            <Button title="Sign Out" onPress={signOut} />
            <Button title="Toggle Theme" onPress={themeContext.toggleTheme} />
        </View>
    );
};

Settings.navigationOptions = {
    title: 'Settings'
};

export default Settings;
