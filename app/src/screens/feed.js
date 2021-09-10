import React from 'react';
import { useQuery, gql } from '@apollo/client'
import BookFeed from '../components/BookFeed';

const Feed = props => {
    return (
        <BookFeed navigation={props.navigation}/>
    );
};

Feed.navigationOptions = {
    title: 'Feed'
}

export default Feed;