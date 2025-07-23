import React, { useState } from 'react';
import axios from 'axios';

const RegisterTeacher = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    subject: '',
    address: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:3000/teacher/register', formData);
      alert('Teacher registered successfully!');
      setFormData({
        id: '',
        name: '',
        email: '',
        password: '',
        phone: '',
        subject: '',
        address: '',
      });
    } catch (err) {
      alert('Registration failed: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  const inputs = [
    { name: 'id', placeholder: 'ID', type: 'text' },
    { name: 'name', placeholder: 'Full Name', type: 'text' },
    { name: 'email', placeholder: 'Email', type: 'email' },
    { name: 'password', placeholder: 'Password', type: 'password' },
    { name: 'phone', placeholder: 'Phone', type: 'number' },
    { name: 'subject', placeholder: 'Subject', type: 'text' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-500 px-6 py-12">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-xl"
      >
        <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-900 tracking-wide">
          Register Teacher
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {inputs.map(({ name, placeholder, type }) => (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="
                block w-full
                rounded-2xl
                border border-gray-300
                px-6 py-4
                text-lg
                placeholder-gray-400
                focus:outline-none focus:ring-4 focus:ring-blue-400
                transition
                shadow-sm
                hover:shadow-md
              "
              required
            />
          ))}
        </div>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="
            block w-full
            rounded-2xl
            border border-gray-300
            px-6 py-4
            mt-8
            text-lg
            placeholder-gray-400
            focus:outline-none focus:ring-4 focus:ring-blue-400
            transition
            shadow-sm
            hover:shadow-md
          "
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`
            w-full mt-10
            bg-blue-700 text-white font-semibold text-xl py-4 rounded-3xl
            hover:bg-blue-800 transition shadow-lg
            focus:outline-none focus:ring-4 focus:ring-blue-500
            ${loading ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterTeacher;
