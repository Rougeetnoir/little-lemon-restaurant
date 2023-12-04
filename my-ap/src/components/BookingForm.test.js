import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import '@testing-library/jest-dom';

test('Renders the BookingForm heading', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; // Mock data
    const mockDispatch = jest.fn(); // Mock function

    // Ensure you pass all required props
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
});
