import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const AboutPage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="about h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-8">
              Hi, I'm [Your Name], a passionate [Your Profession] with a strong background in [Your Expertise]. I have experience in [Your Key Skills] and I'm always eager to learn and grow.
            </p>
            <p className="text-lg mb-8">
              In my free time, I enjoy [Your Hobbies and Interests]. I'm committed to creating high-quality work and delivering exceptional results for my clients.
            </p>
            <a href="/resume.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
              Download Resume
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;