import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const createBooking = async (bookingData) => {

    const modifiedBookingData = {
        ...bookingData,
        start_date: bookingData.startDate,
    };
    
  try {
    const response = await axios.post(`${API_URL}/bookings`, modifiedBookingData);
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

export const getAllBookings = async () => {
  try {
    const response = await axios.get(`${API_URL}/bookings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};
