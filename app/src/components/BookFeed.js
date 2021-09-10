import React from 'react';
import styled from 'styled-components/native'
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import Book from './Book';

const books = [
    { id: 0, title: 'JavaScript & JQuery: Web Development' },
    { id: 1, title: 'To Sleep in a Cloud of Stars' },
    { id: 2, title: 'Dance on the Moon' },
    { id: 3, title: 'Best birthday party with enemies' },
    { id: 4, title: 'Second thought changed my life' },
    { id: 5, title: 'Master data science with deep neural network' },
    { id: 6, title: 'Rest Api with SpringBoot Data Rest Modified Title2' },
    { id: 7, title: 'Rest Api with Django rest framework' },
    { id: 8, title: 'Change life with Yoga' },
    { id: 9, title: 'How the mind works' },
    { id: 10, title: 'How to analyze people' }
];

const ContentView = styled.View`
    height: 100px;
    overflow: hidden;
    margin-bottom: 10px;
`;

const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: #ced0ce;
`;

const BookFeed = props => {
    return (
        <View>
            <FlatList
                data={books}
                keyExtractor={( {id }) => id.toString() }
                ItemSeparatorComponent={() => <Separator />}
                renderItem={
                    ({ item }) => (
                        <TouchableOpacity
                            onPress={() => 
                                props.navigation.navigate('Book', {
                                    id: item.id
                                })
                            }
                        >
                    
                            <ContentView>
                                <Book book={item} />
                            </ContentView>
                        </TouchableOpacity>
                    )
                }
            />
        </View>
    );
};

export default BookFeed;