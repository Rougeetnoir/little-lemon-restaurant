import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
const images = [
    '/images/chef2.jpg',
    '/images/chef1.jpg',
    '/images/chef3.jpg',
    '/images/chef4.jpg'
];

export default function ConfirmedBooking() {
    return <>
        <h1>Booking Confirmed</h1>
        <h2>Your table reservation has been confirmed!</h2>
        <ImageCarousel images={images} />
    </>
}