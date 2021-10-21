import React from 'react'
import { SafeAreaView } from 'react-native'
import { Layout, Text } from 'react-native-ui-kitten';
import { useMutation, gql } from '@apollo/client';
import * as SecureStore from 'expo-secure-store';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

const SIGNUP_USER = gql`
    mutation SignUp($input: NewUser!) {
        signup(input: $input)
    }
`;

const SignUp = props => {
    const storeToken = token => {
        SecureStore.setItemAsync('token', token).then(
            props.navigation.navigate('App')
        );
    };

    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            storeToken(data.signup);
        }
    });

    if (loading) return <Loading />

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {error && <Text>Error signing up!</Text>}
                <UserForm
                    action={signUp}
                    formType="signUp"
                    navigation={props.navigation}
                />
            </Layout>
        </SafeAreaView>
    );
};

SignUp.navigationOptions = {
    title: 'Register'
};

export default SignUp;
