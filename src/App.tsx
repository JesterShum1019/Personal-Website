import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
