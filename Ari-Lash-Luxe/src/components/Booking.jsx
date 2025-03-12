import React, { useState } from "react";
import makeupbg from "@/assets/images/makeupbg.jpg";
import logo from "@/assets/images/logo.png";
import RadioGroup from "./ui/RadioGroup";
import CheckboxGroup from "./ui/CheckboxGroup";
import { createBooking } from "../service/api"
import Modal from "./Modal/modal";


const radioOptionFrequency = [
  { label: "Recurring", value: "recurring" },
  { label: "One Time", value: "one time" },
];

const radioOptionTime = [
  { label: "Morning", value: "morning" },
  { label: "Afternoon", value: "afternoon" },
  { label: "Evening", value: "evening" },
];

const checkboxOptions = [
  { label: "Mon", value: "monday" },
  { label: "Tue", value: "tuesday" },
  { label: "Wed", value: "wednesday" },
  { label: "Thu", value: "thursday" },
  { label: "Fri", value: "friday" },
  { label: "Sat", value: "saturday" },
  { label: "Sun", value: "sunday" },
];

export default function Booking() {
  const [frequency, setFrequency] = useState("");
  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState([]);
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleRadioChangeFrequency = (e) => {
    setFrequency(e.target.value);
  };

  const handleRadioChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setDays(
      (prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value) 
          : [...prevSelected, value]
    );
  };

  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = (today.getMonth() + 1).toString().padStart(2, "0");
    const dd = today.getDate().toString().padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation to check if required fields are filled
    if (!frequency || !startDate || days.length === 0 || !time) {
      setMessage("Please fill in all required fields.");
      setIsModalOpen(true);
      return;
    }
  
    // Prepare the booking data
    const bookingData = { frequency, startDate, days, time, notes };

    setLoading(true);
    try {
      // Try to create the booking
      await createBooking(bookingData);
      setMessage("Booking successfully created!");
      setIsModalOpen(true);
      setFrequency("");
      setStartDate("");
      setDays([]);
      setTime("");
      setNotes("");
    } catch (error) {
      // Handle error response from the backend
      if (error.response) {
        // Extract error messages from the response data
        const errorMessages = error.response.data.errors.map((err) => err.msg);
        setMessage("Failed to create booking.");
        setIsModalOpen(true);
      } else {
        // Handle other types of errors (network issues, etc.)
        setMessage("Failed to create booking. Please try again.");
        setIsModalOpen(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setMessage("");
  };

  return (
    <div className="flex flex-col lg:flex-row" id="appointment">
      <div className="relative w-full h-screen lg:w-[30%]">
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{
            backgroundImage: `url(${makeupbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(50%)",
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-xl font-bold space-y-4">
          <div className="bg-white bg-opacity-70 p-4 rounded-lg mb-5">
            <img alt="Logo" src={logo} className="w-24 h-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul className="text-lg space-y-2 font-normal">
            <li>• Premium extensions for a natural look.</li>
            <li>• Relax with vibrant colors and designs.</li>
            <li>• Customized treatments for glowing skin.</li>
            <li>• Flawless makeup for any occasion.</li>
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-[70%] flex items-center justify-center bg-[#CDB287] py-8 px-6">
        <div className="w-full max-w-xl space-y-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            We'll take your experience to the next level
          </h2>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-5">
              {/* Frquency */}
              <RadioGroup
                label="Frequency"
                options={radioOptionFrequency}
                value={frequency}
                onChange={handleRadioChangeFrequency}
              />
              {/* Date */}
              <div className="flex flex-col space-y-2">
                <label className="text-xl font-medium text-white">
                  Start Date
                </label>
                <input
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  type="date"
                  min={getCurrentDate()}
                  className="p-3 border rounded-lg bg-white w-64 h-12" // Adjust width and height here
                  required
                />
              </div>
            </div>
            {/* Days */}
            <CheckboxGroup
              label="Select Days"
              options={checkboxOptions}
              name="days"
              value={days}
              onChange={handleCheckboxChange}
            />
            {/* Time */}
            <RadioGroup
              label="Select Time"
              options={radioOptionTime}
              value={time}
              onChange={handleRadioChangeTime}
            />
            {/* Notes */}
            <div>
              <label className="text-xl font-medium text-white">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 border rounded-lg bg-white"
                rows="4"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#C5A43B] text-white py-3 px-8 rounded-lg hover:bg-[#9E842D] transition-all duration-300"
                disabled={loading}
              >
                 {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="modal-message">
          <p>{message}</p>
        </div>
      </Modal>
    </div>
  );
}
