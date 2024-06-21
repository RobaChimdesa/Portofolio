import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const EducationPage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="education h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Bachelor of [Your Degree]</h3>
                <p className="text-lg mb-2">[Your University], [Graduation Year]</p>
                <p className="text-gray-600 mb-4">GPA: [Your GPA]</p>
                <p>
                  During my time at [Your University], I gained a strong foundation in [Relevant Subjects] and developed valuable skills in [Relevant Skills]. I was actively involved in [Relevant Extracurricular Activities].
                </p>
              </div>
              {/* Add more education entries as needed */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EducationPage;