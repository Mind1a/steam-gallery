import Header from '../components/atoms/header/Header';
import Footer from '../components/atoms/footer/Footer';
import { ContactContent } from '../components/atoms/contactContent/ContactContent';


export default function Contact() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center">
        <Header />
          <ContactContent />
        <Footer />
      </div>
    </>
  );
}
