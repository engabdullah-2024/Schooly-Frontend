import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({});

  // Fetch all students
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

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/students/${id}`);
      setStudents(students.filter((student) => student._id !== id));
    } catch (error) {
      console.error('Error deleting student:', error.message);
    }
  };

  // Handle update input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle update submission
  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:3000/students/${id}`, form);
      setEditingId(null);
      fetchStudents(); // refresh
    } catch (error) {
      console.error('Error updating student:', error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Registered Students</h1>

      {students.length === 0 ? (
        <p className="text-gray-600">No students found.</p>
      ) : (
        <div className="grid gap-4">
          {students.map((student) => (
            <div key={student._id} className="p-4 border rounded shadow">
              {editingId === student._id ? (
                <div className="grid gap-2">
                  <input
                    name="name"
                    placeholder="Name"
                    value={form.name || ''}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                  <input
                    name="email"
                    placeholder="Email"
                    value={form.email || ''}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                  <input
                    name="address"
                    placeholder="Address"
                    value={form.address || ''}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                  <button
                    onClick={() => handleUpdate(student._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <p><strong>Name:</strong> {student.name}</p>
                  <p><strong>Email:</strong> {student.email}</p>
                  <p><strong>Address:</strong> {student.address}</p>

                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => {
                        setEditingId(student._id);
                        setForm(student);
                      }}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(student._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
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
