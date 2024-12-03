import React, { useState } from "react";
import AppointmentProvider from "./context/AppointmentContext";
import DateSelector from "./components/DateSelector";
import TimeSlotSelector from "./components/TimeSlotSelector";
import UserDetailsForm from "./components/UserDetailsForm";
import ConfirmationScreen from "./components/ConfirmationScreen";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1);

  return (
    <AppointmentProvider>
      <div className="App">
        {step === 1 && <DateSelector />}
        {step === 2 && <TimeSlotSelector />}
        {step === 3 && <UserDetailsForm onSubmit={() => setStep(4)} />}
        {step === 4 && <ConfirmationScreen />}
        <div className="prev-next">
          {step > 1 && <button onClick={() => setStep(step - 1)}>Back</button>}
          {step < 4 && <button onClick={() => setStep(step + 1)}>Next</button>}
        </div>
      </div>
    </AppointmentProvider>
  );
};

export default App;
