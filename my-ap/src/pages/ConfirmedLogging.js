import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
const images = [
    '/images/chef2.jpg',
    '/images/chef1.jpg',
    '/images/chef3.jpg',
    '/images/chef4.jpg'
];
export default function ConfirmedLogging() {
    return <>
        <h1>Welcome back 🥳!</h1>
        <h2>Please enjoy your meal!</h2>
        <ImageCarousel images={images} />
    </>
}