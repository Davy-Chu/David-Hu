import './Home.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <section className="about">
          <h2>About Me 🙋‍♂️</h2>
          <img src="/assets/LinkedInpfp.png" alt="David Hu" className="profile"/>
          <h2>Student | Full Stack Developer</h2>
          <p>
            Hi👋 I'm David! A Computer Science student with a passion for building efficient and scalable
            software solutions. I enjoy working on projects that challenge me to learn new technologies
            and improve my problem-solving skills. 
          </p>
          <p>🔗 Connect with me below 👇</p>
          <div className="social-links">
            <a href="https://github.com/Davy-chu" className="github-icon links">
              <BsGithub className='github'/> Github
            </a>
            <a href="https://www.linkedin.com/in/david-hu-b677b0259/" className="linkedin-icon links">
              <BsLinkedin className='linkedin'/> LinkedIn
            </a>
          </div>
        </section>
        <section className="facts">
          <h2>Quick Facts ⚡</h2>
          <ul>
            <li>🎓 Wilfrid Laurier University CS Class of '26</li>
            <li><img src="/assets/logo192.png" alt=""/> Currently working on a React project</li>
            <li>🌱 Learning about cloud computing</li>
            <li>🎹 Hobbyist Pianist, 🥋Lifelong Martial Artist,🧗Rockclimber </li>
          </ul>
          <p>
            
          </p>
        </section>
        <section className="skills">
          <h2>Skills 💻</h2>
          <ul>
            <li><strong>Languages:</strong> JavaScript, Typescript, Python, C++, C#, PHP</li>
            <li><strong>Frontend:</strong> React, Angular, NextJS</li>
            <li><strong>Backend:</strong> Node.js, Express, Flask, .NET</li>
            <li><strong>Databases:</strong> MongoDB, PostgreSQL</li>
            <li><strong>Tools:</strong> Git, VS Code</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
