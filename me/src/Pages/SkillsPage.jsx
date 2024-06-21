import React from 'react';
import Header from '../Components/Header';
// import Header from '../components/Header';
import Footer from '../Components/Footer';
// import Footer from '../components/Footer';
// import SkillCard from '../components/SkillCard';

const SkillsPage = () => {
  const skills = [
    {
      title: 'JavaScript',
      level: 'Advanced',
    },
    {
      title: 'React',
      level: 'Proficient',
    },
    {
      title: 'Node.js',
      level: 'Intermediate',
    },
    {
      title: 'SQL',
      level: 'Proficient',
    },
    // Add more skill objects as needed
  ];

  return (
    <div>
      <Header />
      <main>
        <section className="skills h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8">My Skills</h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <SkillCard key={index} title={skill.title} level={skill.level} />
              ))}
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;