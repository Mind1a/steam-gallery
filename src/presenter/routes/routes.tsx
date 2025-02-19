import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import AboutUs from '../views/AboutUs';
import Contact from '../views/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
