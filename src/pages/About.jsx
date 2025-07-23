import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          About Schooly
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Schooly</strong> is a smart and simple platform built to register and manage student participation in school assembly programs. Our system supports various activity types such as Quran recitations, lectures, poetry, and more — all handled with ease.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our mission is to make organizing school events seamless, fast, and stress-free for both educators and students. Whether you're handling 10 students or 100, Schooly is your reliable companion.
        </p>
        <p className="text-lg leading-relaxed">
          Built with ❤️ using modern web technologies, Schooly is fully responsive and supports dark mode for a better user experience.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full sm:w-1/2 text-center">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To empower schools with a clean and efficient tool for managing student assemblies and registrations.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full sm:w-1/2 text-center">
            <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
            <p className="text-gray-600 dark:text-gray-300">
              React • Tailwind CSS • Express • MongoDB • Node.js
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
