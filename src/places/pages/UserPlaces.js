import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famouse sky scrapers in the world',
        imageUrl: 'https://i.picsum.photos/id/255/200/200.jpg?hmac=IYQV36UT5-F1dbK_CQXF7PDfLfwcnwKijqeBCo3yMlc',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484445,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famouse sky scrapers in the world',
        imageUrl: 'https://i.picsum.photos/id/255/200/200.jpg?hmac=IYQV36UT5-F1dbK_CQXF7PDfLfwcnwKijqeBCo3yMlc',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484445,
            lng: -73.9878584
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} />
};

export default UserPlaces;