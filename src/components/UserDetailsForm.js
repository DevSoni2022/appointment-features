import React, { useContext, useState, useEffect } from "react";
import { AppointmentContext } from "../context/AppointmentContext";

const UserDetailsForm = ({ onSubmit }) => {
  const { userInfo, setUserInfo } = useContext(AppointmentContext);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation logic
  const validate = () => {
    const newErrors = {};
    if (!userInfo.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (userInfo.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }
    if (!userInfo.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(userInfo.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update form validity whenever userInfo changes
  useEffect(() => {
    setIsFormValid(validate());
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
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
            max={10}
            placeholder="Phone Number"
            value={userInfo.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <button type="submit" disabled={!isFormValid}>
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
