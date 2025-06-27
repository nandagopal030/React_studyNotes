// File: src/Form.jsx
import './form.css';
import formFields from './data.json';
import { useState } from 'react';

export const Form = ({ onAdd }) => {
  const initialState = {};
  formFields.forEach(field => initialState[field.name] = field.type === 'checkbox' ? false : '');

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};
    formFields.forEach(({ name, required }) => {
      if (required && !formData[name]) {
        newErrors[name] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const stored = JSON.parse(localStorage.getItem('records')) || [];
    const updated = [...stored, formData];
    localStorage.setItem('records', JSON.stringify(updated));
    onAdd(updated);
    setFormData(initialState);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {formFields.map(({ label, name, type, required }) => (
        <div key={name}>
          <label>{label}</label>
          <input
            type={type}
            name={name}
            value={type === 'checkbox' ? undefined : formData[name]}
            checked={type === 'checkbox' ? formData[name] : undefined}
            onChange={handleChange}
          />
          {errors[name] && <small style={{ color: 'red' }}>{errors[name]}</small>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};