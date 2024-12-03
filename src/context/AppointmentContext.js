import React, { createContext, useState } from "react";

export const AppointmentContext = createContext();

const AppointmentProvider  = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: "", phone: "" });

  return (
    <AppointmentContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentProvider ;
