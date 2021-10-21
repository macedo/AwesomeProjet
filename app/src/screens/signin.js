import React from 'react';
import { SafeAreaView } from 'react-native';
import { useMutation, gql } from '@apollo/client'
import * as SecureStore from 'expo-secure-store';
import { Layout, Text } from 'react-native-ui-kitten';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

const SIGNIN_USER = gql`
    mutation SignIn($input: NewSession!) {
        signin(input: $input)
    }
`;

const SignIn = props => {
    const storeToken = token => {
        SecureStore.setItemAsync('token', token).then(
            props.navigation.navigate('App')
        );
    };

    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
            storeToken(data.signin)
        }
    });

    if (loading) return <Loading />

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {error && <Text>Error signing in!</Text>}
                <UserForm
                    action={signIn}
                    formType="signIn"
                    navigation={props.navigation}
                />
            </Layout>
        </SafeAreaView>
    );
};

SignIn.navigationOptions = {
    title: 'Sign In'
};

export default SignIn;
