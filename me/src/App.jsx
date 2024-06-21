// import { useState } from 'react'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className='bg-slate-950 text-white h-screen  text-4xl'> 
//         <h1>My name is Roba Chimdesa</h1>
//         <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
        
//       </div>
//       <div className='bg-black h-screen text-white' id='about'>
//       <p>
//       My passion for learning and my drive to succeed make me a dedicated and
//       motivated computer science and engineering student. With my strong
//       foundation in web development and competitive programming, I’m
//       well-positioned to excel in his future career as a computer science.
//     </p>
//       </div>
     
//     </>
//   )
// }

// export default App

import React from 'react';
import HomePage from './Pages/HomePage';
// import AboutPage from './pages/AboutPage';
import AboutPage from './Pages/AboutPage';
import EducationPage from './Pages/EducationPage';
import ProjectsPage from './Pages/ProjectsPage';
import SkillsPage from './Pages/SkillsPage';
import ContactPage from './Pages/ContactPage';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
   
    <div className="relative h-screen overflow-y-scroll">
      <Header/>
          <section id="home" className="h-screen flex items-center justify-center">
        <HomePage />
      </section>
     
       <section id="about" className="h-screen flex items-center justify-center">
        <AboutPage />
      </section>

      <section id="education" className="h-screen flex items-center justify-center">
        <EducationPage />
      </section>

      <section id="projects" className="h-screen flex items-center justify-center">
        <ProjectsPage />
      </section>

     <section id="skills" className="h-screen flex items-center justify-center">
        <SkillsPage />
      </section>

      <section id="contact" className="h-screen flex items-center justify-center">
        <ContactPage />
      </section> 
    </div>
  );
};

export default App;