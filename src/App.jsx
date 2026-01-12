import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Blogs } from './pages/Blogs';
import { Skills } from './pages/Skills';
import { Resume } from './pages/Resume';
import { Bio } from './pages/Bio';

function App() {
  return (
    <div className="bg-gray-100">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/bio" element={<Bio />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
