import React, { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const TimeSlotSelector = () => {
  const { selectedDate, selectedTime, setSelectedTime } = useContext(AppointmentContext);
  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "03:00 PM"];

  if (!selectedDate) {
    return <p>Please select a date first.</p>;
  }

  return (
    <div>
      <h3 className="center">Available Slots for {selectedDate}:</h3>
      <ul className="center">
        {timeSlots.map((time) => (
          <li key={time} style={{listStyle:'none',width:'90%'}}>
            <button
              style={{
                backgroundColor: selectedTime === time ? "lightblue" : "white",
                color: selectedTime === time ? "white" : "black",
                margin:'2px'
              }}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlotSelector;
