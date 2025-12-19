import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Blogs } from './pages/Blogs';
import { Skills } from './pages/Skills';
import { Resume } from './pages/Resume';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;
