// src/data/formConfig.ts

export const formConfig = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    required: true,
    placeholder: "Enter your first name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    placeholder: "Enter your email",
  },
  {
    label: "Gender",
    name: "gender",
    type: "radio",
    options: ["Male", "Female", "Other"],
    required: true,
  },
  {
    label: "Subjects",
    name: "subject", 
    type: "checkbox",
    options: ["Math", "Science", "History"],
  },
  {
    label: "City",
    name: "city",
    type: "select",
    options: ["Chennai", "Mumbai", "Hyderabad"],
    required: true,
  },
];
