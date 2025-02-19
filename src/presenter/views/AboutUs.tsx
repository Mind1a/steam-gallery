import Header from '../components/atoms/header/Header';
import Footer from '../components/atoms/footer/Footer';
import { AboutUsContent } from '../components/atoms/aboutUsContent/AboutUsContent';

export default function AboutUsPage() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center">
        <Header />
          <AboutUsContent />
        <Footer />
      </div>
    </>
  );
}
