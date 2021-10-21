import React, { useState } from 'react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import * as SecureStore from 'expo-secure-store';

import Screens from './screens';
import { ThemeContext } from './theme-context';
import getEnvVars from '../config';

const { API_URL } = getEnvVars();
const uri  = API_URL;

const cache = new InMemoryCache();
const httpLink = createHttpLink({uri});

const authLink = setContext(async (_, { headers }) => {
    return {
        headers: {
            ...headers,
            origin: 'aqui',
            authorization: (await SecureStore.getItemAsync('token')) || ''
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
});

const Main = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    };

    return (
        <ApolloProvider client={client}>
            <IconRegistry icons={EvaIconsPack} />
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <ApplicationProvider {...eva} theme={eva[theme]} >
                    <Screens />
                </ApplicationProvider>
            </ThemeContext.Provider>
        </ApolloProvider>
    );
};

export default Main;
