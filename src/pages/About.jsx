import React from 'react';
import { FaUsers, FaClipboardList, FaLaptopCode, FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-16 flex items-center">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-5xl font-extrabold text-center text-blue-700 dark:text-blue-400 tracking-wide">
          About <span className="text-blue-900 dark:text-blue-300">Schooly</span>
        </h1>

        <div className="space-y-6 max-w-3xl mx-auto text-lg leading-relaxed">
          <p>
            <FaUsers className="inline text-blue-600 dark:text-blue-400 mr-2" />
            <strong>Schooly</strong> is a smart, easy-to-use platform designed to register and manage all types of users in schools — including <em>students</em>, <em>teachers</em>, and <em>parents</em>.
          </p>
          <p>
            <FaClipboardList className="inline text-blue-600 dark:text-blue-400 mr-2" />
            Whether it's organizing assemblies, managing events, or tracking attendance, Schooly simplifies school administration with a clean, intuitive interface.
          </p>
          <p>
            <FaRocket className="inline text-blue-600 dark:text-blue-400 mr-2" />
            Our mission is to empower schools of any size with a fast, reliable, and stress-free management system — helping educators focus on what really matters.
          </p>
          <p>
            <FaLightbulb className="inline text-blue-600 dark:text-blue-400 mr-2" />
            Built with <FaHeart className="inline text-red-500" /> and modern web technologies, Schooly supports full responsiveness and dark mode for optimal user experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition">
            <FaUsers className="text-5xl text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold">User Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Manage registrations and profiles for students, teachers, and parents with ease.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition">
            <FaLaptopCode className="text-5xl text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold">Modern Tech Stack</h3>
            <p className="text-gray-600 dark:text-gray-300">
              React, Tailwind CSS, Node.js, Express, and MongoDB power our scalable and efficient platform.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition">
            <FaHeart className="text-5xl text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold">Built with ❤️</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Designed for smooth user experiences and reliable school management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
