import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({});

  // Fetch teachers
  const fetchTeachers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/teachers');
      setTeachers(res.data);
    } catch (error) {
      console.error('Failed to fetch teachers:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this teacher?')) return;
    try {
      await axios.delete(`http://localhost:3000/teachers/${id}`);
      setTeachers(teachers.filter((t) => t._id !== id));
    } catch (error) {
      console.error('Failed to delete teacher:', error);
    }
  };

  // Handle input changes in edit form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Start editing a teacher
  const handleEdit = (teacher) => {
    setEditingId(teacher._id);
    setForm({
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      phone: teacher.phone,
      subject: teacher.subject,
      address: teacher.address,
    });
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingId(null);
    setForm({});
  };

  // Submit update
  const handleUpdate = async (id) => {
    try {
      const updatedTeacher = await axios.put(`http://localhost:3000/teachers/${id}`, form);
      setTeachers(teachers.map((t) => (t._id === id ? updatedTeacher.data : t)));
      setEditingId(null);
      setForm({});
    } catch (error) {
      console.error('Failed to update teacher:', error);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-600 text-lg mt-10">Loading teachers...</p>;
  }

  if (teachers.length === 0) {
    return <p className="text-center text-red-500 text-lg mt-10">No teachers found.</p>;
  }

  return (
    <div className="p-8 min-h-screen bg-blue-50">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-800">Registered Teachers</h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
          <div
            key={teacher._id}
            className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition"
          >
            {editingId === teacher._id ? (
              <>
                <input
                  name="id"
                  value={form.id}
                  onChange={handleChange}
                  type="text"
                  className="mb-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-300"
                  placeholder="ID"
                />
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className="mb-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-300"
                  placeholder="Name"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="mb-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-300"
                  placeholder="Email"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="number"
                  className="mb-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-300"
                  placeholder="Phone"
                />
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  type="text"
                  className="mb-2 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-300"
                  placeholder="Subject"
                />
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  type="text"
                  className="mb-4 w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-300"
                  placeholder="Address"
                />
                <div className="flex justify-between">
                  <button
                    onClick={() => handleUpdate(teacher._id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-xl transition"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-blue-700 mb-3">{teacher.name}</h2>
                <p><strong>ID:</strong> {teacher.id}</p>
                <p><strong>Email:</strong> {teacher.email}</p>
                <p><strong>Phone:</strong> {teacher.phone}</p>
                <p><strong>Subject:</strong> {teacher.subject}</p>
                <p><strong>Address:</strong> {teacher.address}</p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleEdit(teacher)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(teacher._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
