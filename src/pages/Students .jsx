import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({});

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/students/${id}`);
      setStudents(students.filter((student) => student._id !== id));
    } catch (error) {
      console.error('Error deleting student:', error.message);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id) => {
    try {
      const { password, _id, ...updateData } = form;
      await axios.put(`http://localhost:3000/students/${id}`, updateData);
      setEditingId(null);
      fetchStudents();
    } catch (error) {
      console.error('Error updating student:', error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 to-indigo-100 py-10 px-4 md:px-8">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-indigo-800 drop-shadow-sm">
        Registered Students
      </h1>

      {students.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">No students found.</p>
      ) : (
        <div className="space-y-8 max-w-5xl mx-auto">
          {students.map((student) => (
            <div
              key={student._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-indigo-200"
            >
              {editingId === student._id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdate(student._id);
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Read-only ID */}
                  <div>
                    <label className="block mb-2 font-semibold text-indigo-700">ID (read-only)</label>
                    <input
                      type="text"
                      value={student.id}
                      readOnly
                      className="w-full rounded-lg border border-indigo-300 bg-indigo-50 px-4 py-3 cursor-not-allowed text-indigo-600 select-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold text-indigo-700">Name</label>
                    <input
                      name="name"
                      type="text"
                      value={form.name || ''}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold text-indigo-700">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email || ''}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold text-indigo-700">Phone</label>
                    <input
                      name="phone"
                      type="number"
                      value={form.phone || ''}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold text-indigo-700">Class</label>
                    <input
                      name="class"
                      type="text"
                      value={form.class || ''}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold text-indigo-700">Section</label>
                    <input
                      name="section"
                      type="text"
                      value={form.section || ''}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold text-indigo-700">Roll Number</label>
                    <input
                      name="rollNumber"
                      type="number"
                      value={form.rollNumber || ''}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-2 font-semibold text-indigo-700">Address</label>
                    <input
                      name="address"
                      type="text"
                      value={form.address || ''}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-indigo-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    />
                  </div>

                  <div className="md:col-span-2 flex justify-end gap-5 mt-6">
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:bg-indigo-700 transition"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="bg-gray-300 text-gray-800 rounded-full px-8 py-3 font-semibold hover:bg-gray-400 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-indigo-900 text-lg font-medium">
                    <p>
                      <span className="text-indigo-700 font-semibold">ID:</span> {student.id}
                    </p>
                    <p>
                      <span className="text-indigo-700 font-semibold">Name:</span> {student.name}
                    </p>
                    <p>
                      <span className="text-indigo-700 font-semibold">Email:</span> {student.email}
                    </p>
                    <p>
                      <span className="text-indigo-700 font-semibold">Phone:</span> {student.phone}
                    </p>
                    <p>
                      <span className="text-indigo-700 font-semibold">Class:</span> {student.class}
                    </p>
                    <p>
                      <span className="text-indigo-700 font-semibold">Section:</span> {student.section}
                    </p>
                    <p>
                      <span className="text-indigo-700 font-semibold">Roll Number:</span> {student.rollNumber}
                    </p>
                    <p>
                      <span className="text-indigo-700 font-semibold">Address:</span> {student.address}
                    </p>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <button
                      onClick={() => {
                        setEditingId(student._id);
                        setForm(student);
                      }}
                      className="bg-indigo-600 text-white rounded-full px-6 py-2 font-semibold shadow-md hover:bg-indigo-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(student._id)}
                      className="bg-red-600 text-white rounded-full px-6 py-2 font-semibold shadow-md hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Students;
