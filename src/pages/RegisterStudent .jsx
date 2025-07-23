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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-400 px-6 py-12">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-xl rounded-3xl p-12 w-full max-w-xl"
      >
        <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-800 tracking-wide">
          Register Student
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'id', placeholder: 'ID', type: 'text' },
            { name: 'name', placeholder: 'Full Name', type: 'text' },
            { name: 'email', placeholder: 'Email', type: 'email' },
            { name: 'password', placeholder: 'Password', type: 'password' },
            { name: 'phone', placeholder: 'Phone', type: 'number' },
            { name: 'class', placeholder: 'Class', type: 'text' },
            { name: 'section', placeholder: 'Section', type: 'text' },
            { name: 'rollNumber', placeholder: 'Roll Number', type: 'number' },
          ].map(({ name, placeholder, type }) => (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              onChange={handleChange}
              className="
                block w-full
                rounded-2xl
                border border-gray-300
                px-6 py-4
                text-lg
                placeholder-gray-400
                focus:outline-none focus:ring-4 focus:ring-blue-300
                transition
                shadow-sm
                hover:shadow-md
              "
            />
          ))}
        </div>

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="
            block w-full
            rounded-2xl
            border border-gray-300
            px-6 py-4
            mt-8
            text-lg
            placeholder-gray-400
            focus:outline-none focus:ring-4 focus:ring-blue-300
            transition
            shadow-sm
            hover:shadow-md
          "
        />

        <button
          type="submit"
          className="
            w-full
            mt-10
            bg-blue-700
            text-white
            font-semibold
            text-xl
            py-4
            rounded-3xl
            hover:bg-blue-800
            transition
            shadow-lg
            focus:outline-none focus:ring-4 focus:ring-blue-400
          "
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterStudent;
