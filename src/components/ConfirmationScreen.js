import React, { useContext } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const ConfirmationScreen = () => {
  const { selectedDate, selectedTime, userInfo } = useContext(AppointmentContext);

  return (
    <div>
      <h2>Appointment Confirmed!</h2>
      <p>Date: {selectedDate}</p>
      <p>Time: {selectedTime}</p>
      <p>Name: {userInfo.name}</p>
      <p>Phone: {userInfo.phone}</p>
    </div>
  );
};

export default ConfirmationScreen;
