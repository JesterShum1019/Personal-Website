import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <>
      <NavBar /> 
      <br/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}


export default App;
