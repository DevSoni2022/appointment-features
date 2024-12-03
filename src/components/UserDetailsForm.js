import React, { useContext, useState, useEffect } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const UserDetailsForm = ({ onSubmit, updateFormValidity }) => {
  const { userInfo, setUserInfo } = useContext(AppointmentContext);
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};
    if (!data.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (data.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }
    if (!data.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    return newErrors;
  };

  useEffect(() => {
    const errors = validate(userInfo);
    setErrors(errors);
    updateFormValidity(Object.keys(errors).length === 0);
  }, [userInfo, updateFormValidity]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      onSubmit();
    }
  };

  return (
    <div className="user-details-form">
      <h3>Enter Your Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userInfo.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={userInfo.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
