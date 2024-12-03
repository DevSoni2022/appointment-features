import React, { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const DateSelector = () => {
  const { selectedDate, setSelectedDate } = useContext(AppointmentContext);

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format.

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="date-selector">
      <label htmlFor="appointment-date">Select Date:</label>
      <input
        id="appointment-date"
        type="date"
        value={selectedDate || ""}
        min={today} // Restrict past dates
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateSelector;
