import React from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const BookView = styled.View`
    padding: 10px;
`;

const Book = props => {
    return (
        <BookView>
            <Text>{props.book.title}</Text>
        </BookView>
    )
};

export default Book;