import React from 'react'
import { Text } from 'react-native';
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
        <React.Fragment>
            {error && <Text>Error signing up!</Text>}
            <UserForm
                action={signUp}
                formType="signUp"
                navigation={props.navigation}
            />
        </React.Fragment>
    )
};

SignUp.navigationOptions = {
    title: 'Register'
};

export default SignUp;
