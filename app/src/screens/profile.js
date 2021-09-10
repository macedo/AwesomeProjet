import React from 'react';
import { Text, View } from 'react-native';

const Profile = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile</Text>
        </View>
    );
};

Profile.navigationOptions = {
    title: 'Profile'
};

export default Profile;
