import React, { useState } from 'react';
import axios from 'axios';

const RegisterStudent = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    class: '',
    section: '',
    rollNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/register', formData);
      alert('Student registered successfully!');
    } catch (err) {
      alert('Registration failed: ' + err.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form
        onSubmit={handleRegister}
        className="bg-blue-50 shadow-lg rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Register Student</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" type="text" name="id" placeholder="ID" onChange={handleChange} />
          <input className="input" type="text" name="name" placeholder="Full Name" onChange={handleChange} />
          <input className="input" type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input className="input" type="password" name="password" placeholder="Password" onChange={handleChange} />
          <input className="input" type="number" name="phone" placeholder="Phone" onChange={handleChange} />
          <input className="input" type="text" name="class" placeholder="Class" onChange={handleChange} />
          <input className="input" type="text" name="section" placeholder="Section" onChange={handleChange} />
          <input className="input" type="number" name="rollNumber" placeholder="Roll Number" onChange={handleChange} />
        </div>

        <input
          className="input mt-4 w-full"
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

// Tailwind custom input class
const inputStyle = `
  block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 
  focus:ring-blue-400 bg-white placeholder-gray-500
`;

// Inject input styles globally (optional)
const style = document.createElement('style');
style.innerHTML = `.input { ${inputStyle} }`;
document.head.appendChild(style);

export default RegisterStudent;
