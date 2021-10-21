import React from 'react';
import { Text, View} from 'react-native';

const AddPost = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>AddPost</Text>
        </View>
    );
};

AddPost.navigationOptions = {
    title: 'AddPost'
};

export default AddPost;
