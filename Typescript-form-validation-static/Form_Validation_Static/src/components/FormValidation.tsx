import React, { useState } from "react";
import './formvalidation.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  gender: string;
  subject: string[];
  city: string;
};

const FormValidation = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: '',
    subject: [],
    city: '',
  });

  const genderOptionsArr: string[] = ["male", "female", "other"];
  const subjectArr: string[] = ["English", "Maths", "Physics"];
  const cityOptions: string[] = ["Chennai", "Mumbai", "Hydrabad", "Bangalore"];

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = e.target;
    if (checked) {
      if (!formData.subject.includes(value)) {
        setFormData({
          ...formData,
          subject: [...formData.subject, value],
        });
      }
    } else {
      setFormData({
        ...formData,
        subject: formData.subject.filter((subj) => subj !== value),
      });
    }
  };

  const handelSubmit = (): void => {
    //Seting and Getting in the localStorage
   const existingData = localStorage.getItem("formDataList")
   const dataArr = existingData ? JSON.parse(existingData) : [];
   dataArr.push(formData);
   localStorage.setItem("formDataList", JSON.stringify(dataArr));

    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      gender: '',
      subject: [],
      city: '',
    });

  };

  return (
    <div className="form-cont">
      <div className="main-form-container">
        <h1>Form Validation using TypeScript</h1>
        <form onSubmit={(e) => { e.preventDefault(); handelSubmit(); }}>

          <div className="form-group">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              placeholder="Enter Your first name"
              name="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="form-group contact-field">
            <label htmlFor="contact">Contact:</label>
            <div className="contact-input">
              <span>+91</span>
              <input
                type="tel"
                id="contact"
                placeholder="Enter your number"
                name="contact"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <p>Gender:</p>
            {genderOptionsArr.map((gender) => (
              <label key={gender} className="radio-group">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                />
                {gender}
              </label>
            ))}
          </div>

          <div className="form-group">
            <p>Your Best Subject:</p>
            {subjectArr.map((subject) => (
              <label key={subject} className="checkbox-group">
                <input
                  type="checkbox"
                  name="subject"
                  value={subject}
                  checked={formData.subject.includes(subject)}
                  onChange={handleCheckbox}
                />
                {subject}
              </label>
            ))}
          </div>

          <div className="form-group">
            <label htmlFor="city">Select City:</label>
            <select
              name="city"
              id="city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            >
              <option value="">--Select City--</option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default FormValidation;
