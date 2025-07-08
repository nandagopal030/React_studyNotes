import { useState } from 'react';
import { formConfig } from '../data/formConfig';
import '../components/dynamicform.css'

type FormData = {
  firstName: string;
  email: string;
  gender: string;
  subject: string[];
  city: string;
};

const DynamicForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    gender: '',
    subject: [],
    city: '',
  });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target;

  if (type === "checkbox") {
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => {
      const prevArray = prev[name as keyof FormData] as string[];
      return {
        ...prev,
        [name]: checked
          ? [...prevArray, value]
          : prevArray.filter((item) => item !== value),
      };
    });
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(" Form Submitted:", formData);
    localStorage.setItem("dynamicForm", JSON.stringify(formData));
    alert("Form data saved to localStorage!");
    setFormData({
      firstName: '',
      email: '',
      gender: '',
      subject: [],
      city: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dynamic Form Rendering Using React + TypeScript</h2>

      {formConfig.map((field) => (
        <div key={field.name} style={{ marginBottom: "1rem" }}>
          <label>{field.label}</label>
          <br />

          {field.type === "text" || field.type === "email" ? (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name as keyof FormData]}
              onChange={handleChange}
              required={field.required}
            />
          ) : field.type === "select" ? (
            <select
              name={field.name}
              value={formData[field.name as keyof FormData]}
              onChange={handleChange}
              required={field.required}
            >
              <option value="">-- Select --</option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : field.type === "radio" ? (
            field.options?.map((opt) => (
              <label key={opt} style={{ marginRight: "1rem" }}>
                <input
                  type="radio"
                  name={field.name}
                  value={opt}
                  checked={formData[field.name as keyof FormData] === opt}
                  onChange={handleChange}
                  required={field.required}
                />
                {opt}
              </label>
            ))
          ) : field.type === "checkbox" ? (
            field.options?.map((opt) => (
              <label key={opt} style={{ marginRight: "1rem" }}>
                <input
                  type="checkbox"
                  name={field.name}
                  value={opt}
                  checked={(formData[field.name as keyof FormData] as string[]).includes(opt)}
                  onChange={handleChange}
                />
                {opt}
              </label>
            ))
          ) : null}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
