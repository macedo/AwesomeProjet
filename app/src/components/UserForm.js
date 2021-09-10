import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Form = styled.View`
    padding: 10px;
`;

const StyledInput = styled.TextInput`
    border: 1px solid gray;
    font-size: 18px;
    padding: 8px;
    margin-bottom: 25px;
`;

const FormLabel = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

const FormButton = styled.TouchableOpacity`
    background: #0077cc;
    width: 100%;
    padding: 8px;
`;

const ButtonText = styled.Text`
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

const Signup = styled.TouchableOpacity`
    margin-top: 20px;
`;

const Link = styled.Text`
    color: #0077cc;
    font-weight: bold;
`;

const SignInForm = props => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        props.action({
            variables: {
                input: {
                    email: email,
                    password: password
                }
            }
        });
    };

    return (
        <Form>
            <FormLabel>Email</FormLabel>
            <StyledInput
                onChangeText={ text => setEmail(text) }
                value={ email }
                textContentType="emailAddress"
                autoCompleteType="email"
                autoFocus={ true }
                autoCapitalize="none"
            />

            <FormLabel>Password</FormLabel>
            <StyledInput
                onChangeText={ text => setPassword(text) }
                value={ password }
                textContentType="password"
                secureTextEntry={ true }
            />


            <FormButton onPress={handleSubmit}>
                <ButtonText>Submit</ButtonText>
            </FormButton>

            {props.formType !== 'signUp' && (
                <Signup onPress={() => props.navigation.navigate('SignUp')}>
                    <Text>
                        Need an account? <Link>Sign up.</Link>
                    </Text>
                </Signup>
            )}
        </Form>
    );
};

export default SignInForm;
