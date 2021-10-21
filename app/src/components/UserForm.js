import React, { useState } from 'react';
import { Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Button, Icon, Input } from 'react-native-ui-kitten';
import styled from 'styled-components/native';

const Form = styled.View`
    padding: 5px;
`;

const SignInForm = props => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const handleSubmit = () => {
        props.action({
            variables: {
                input: {
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirmation
                }
            }
        });
    };

    const RenderIcon = () => (
        <TouchableWithoutFeedback onPress={toggleSecureTextEntry}>
            <Icon name='eye' width={32} height={32} fill={'#000000'}  />
        </TouchableWithoutFeedback>
    );

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <Form>
            <Input
                onChangeText={ text => setEmail(text) }
                placeholder="Email or username"
                value={ email }
                textContentType="emailAddress"
                autoCompleteType="email"
                autoCapitalize="none"
            />

            <Input
                placeholder="Password"
                onChangeText={ text => setPassword(text) }
                value={ password }
                textContentType="password"
                secureTextEntry={ secureTextEntry }
                accessoryRight={ RenderIcon }
            />

            {props.formType === 'signUp' && (
                <Input
                    placeholder="Password confirmation"
                    onChangeText={ text => setPasswordConfirmation(text) }
                    value={ passwordConfirmation }
                    textContentType="password"
                    secureTextEntry={ true }
                />
            )}

            <Button onPress={handleSubmit}>Submit</Button>

            {props.formType !== 'signUp' && (
                <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                    <Text>
                        Need an account? <Text>Sign up.</Text>
                    </Text>
                </TouchableOpacity>
            )}
        </Form>
    );
};

export default SignInForm;
