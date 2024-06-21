import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import ProjectCard from '../components/ProjectCard';
import ProjectCard from '../Components/ProjectCard';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'project1.jpg',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      image: 'project2.jpg',
      link: 'https://example.com/project2',
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      {/* <Header /> */}
      <main>
        <section className="projects h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                  link={project.link}
                />
              ))} */}
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ProjectsPage;