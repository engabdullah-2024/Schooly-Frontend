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
      await axios.post('http://localhost:3000/register', formData);
      alert('Student registered successfully!');
    } catch (err) {
      alert('Registration failed: ' + err.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
          Register Student
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="id"
            placeholder="ID"
            onChange={handleChange}
            className="input-style"
          />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="input-style"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="input-style"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="input-style"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="input-style"
          />
          <input
            type="text"
            name="class"
            placeholder="Class"
            onChange={handleChange}
            className="input-style"
          />
          <input
            type="text"
            name="section"
            placeholder="Section"
            onChange={handleChange}
            className="input-style"
          />
          <input
            type="number"
            name="rollNumber"
            placeholder="Roll Number"
            onChange={handleChange}
            className="input-style"
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="input-style mt-5 w-full"
        />

        <button
          type="submit"
          className="w-full mt-7 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterStudent;
