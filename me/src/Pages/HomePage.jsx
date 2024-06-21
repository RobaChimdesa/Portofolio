import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const HomePage = () => {
  return (
    <div>
      <Header />
      
      <main>
        <section className="hero h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl mb-8">Discover my work and learn more about me.</p>
            <a href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
              Learn More
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;