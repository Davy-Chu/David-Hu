import './Projects.css';
import Project from '../../components/Project/Project.jsx'
export default function Projects() {
    return (
        <div className="work-page">
            <div className="page-content">
                <p className="work-desc">
                    Some of the projects I have made over the years.
                </p>
                <h2 className="work-header">Timeline</h2>
                <Project
                    name="Qmove"
                    technologies="React, Flask, MongoDB, OpenCV, MediaPipe, Streamlit"
                    date="Winter 2025"
                    desc="Developed a physiotherapy tracker app enabling users to track progress and receive AI-driven recovery insights using React. Implemented using OpenCV, MediaPipe and MongoDB to track and log arm ROM
daily. Flask server used for data handling, and Streamlit used to visualize multi-day recovery analytics."
                />
                <Project
                    name="True Weekly"
                    technologies="React, Flask, Scikit-learn"
                    date="Winter 2024"
                    desc="Developed and deployed a comprehensive full-stack application utilizing React and Flask,
incorporating OAuth authentication to securely integrate users’ Spotify accounts upon signing in through
the website. Leveraged Scikit-Learn and k-NN for implementing a song recommender that is used to create
customized playlists that weigh recent listening history more heavily"
                />
                {/* <Project
                    name="Langle"
                    technologies="React"
                    date="October 2023"
                    desc="Wordle-inspired guess the language game."
                /> */}
                <Project
                    name="MyUniCourseBuddy"
                    technologies="Next.js, Express, Node.js"
                    date="August 2023"
                    desc="Created a web application utilizing the MERN stack with Next.js, enabling users to register accounts and collaboratively build shared group course schedules with friends. Applied Graph Theory
principles to implement an algorithm leveraging nodes from a MongoDB database that efficiently generates
potential course schedules, optimizing class overlap with friends"
                />
                
            </div>
        </div>
        )
}