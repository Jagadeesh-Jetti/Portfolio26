import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Feed />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blogs" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;
