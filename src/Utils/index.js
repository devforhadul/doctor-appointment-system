import { toast } from "react-toastify";

export const getBookings = () => {
    const bookings = localStorage.getItem('bookings');
    if (bookings) {
        return JSON.parse(bookings);
    } else {
        return [];
    }
    
}


export const addBookings = (bookings) => {
    const booked = getBookings();
    const existingBooking = booked.find(booking => booking.id === bookings.id);
    if (existingBooking) {
        toast.error(`${bookings.name} already booked`);
        return;
    }
    booked.push(bookings);
    localStorage.setItem('bookings',JSON.stringify(booked))
    
}

export const removeBookings = (id) => {
    const booked = getBookings();
    const remainingBookings = booked.filter(booking => booking.id !== id);
    localStorage.setItem('bookings',JSON.stringify(remainingBookings))
    

    toast.success('Your appointment has been cancelled successfully.');
}