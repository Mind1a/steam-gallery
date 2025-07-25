import { Outlet } from 'react-router-dom';
import Footer from './presenter/components/atoms/footer/Footer';
import Header from './presenter/components/atoms/header/Header';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
