import React from 'react';
import { Text, View } from 'react-native';

const BookScreen = props => {
    const id = props.navigation.getParam('id')

    return (
        <View style={{ padding: 10 }}>
            <Text>This is a Book Screen... and book id is  {id}.</Text>
        </View>
    );
};

export default BookScreen;