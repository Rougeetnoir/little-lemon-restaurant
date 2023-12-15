import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../components/utilities/MockApi';


const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes =>
    [...initialAvailableTimes, ...fetchAPI(new Date())];

const BookingPage = () => {
    const [
        availableTimes,
        dispatchOnDateChange
    ] = useReducer(updateTimes, [], initializeTimes);

    // Submit
    const navigate = useNavigate();

    const submitData = formData => {
        const response = submitAPI(formData);
        if (response) navigate('/booking-confirmed');
    };

    return (
        <>
            <BookingForm
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                submitData={submitData}
            />
        </>
    );
};

export default BookingPage;
export { updateTimes, initializeTimes };