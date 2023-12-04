import '@testing-library/jest-dom';
import { updateTimes, initializeTimes } from './BookingPage';


// test('initializeTimes returns the correct initial times', () => {
//     expect(initializeTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
// });

// test('updateTimes updates times correctly', () => {
//     const currentState = ['17:00', '18:00'];
//     const newState = updateTimes(currentState, /* appropriate action or input */);
//     expect(newState).toEqual(/* expected new state */);
// });



// Mock fetchAPI or fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(['10:00', '11:00', '12:00']), // Mock response
    })
);

test('initializeTimes returns the correct initial times', async () => {
    const times = await initializeTimes();
    expect(times).toEqual(['10:00', '11:00', '12:00']);
});


test('updateTimes updates times correctly based on selected date', () => {
    const mockState = ['10:00', '11:00'];
    const mockAction = { type: 'UPDATE_TIMES', selectedDate: '2023-04-01' };
    const updatedState = updateTimes(mockState, mockAction);

    // Assuming updateTimes modifies the times based on the date
    expect(updatedState).toEqual(/* expected new state based on date */);
});
