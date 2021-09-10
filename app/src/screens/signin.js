import React from 'react';
import { Text } from 'react-native';
import { useMutation, gql } from '@apollo/client'
import * as SecureStore from 'expo-secure-store';

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
        <React.Fragment>
            {error && <Text>Error signing in!</Text>}
            <UserForm
                action={signIn}
                formType="signIn"
                navigation={props.navigation}
            />
        </React.Fragment>
    );
};

SignIn.navigationOptions = {
    title: 'Sign In'
};

export default SignIn;
