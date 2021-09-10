import React from 'react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import * as SecureStore from 'expo-secure-store';

import Screens from './screens';
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

const client  = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
});

console.log("URL: ", uri)

const Main = () => {
    return (
        <ApolloProvider client={client}>
            <Screens />
        </ApolloProvider>
    );
};

export default Main;