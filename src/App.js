import './App.css';
import Home from './pages/Home/Home.jsx';
import Work from './pages/Work/Work.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (  
    <div className="App">
      <header className="App-header">
        < Header />
        <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />

      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
