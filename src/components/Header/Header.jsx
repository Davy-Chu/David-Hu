import react from 'react';
import './Header.css';
export default function Header() {
    return (
        <div className="header">
            <div className="logo">D.H.</div>
            <a href="/" className="active">
                <h3>Home</h3>
            </a>
            <a href="/work">
                <h3>Work</h3>
            </a>
            <a href="/projects">
                <h3>Projects</h3>
            </a>
            <a href="/blog">
                <h3>Blog</h3>
            </a>
        </div>
    );
}