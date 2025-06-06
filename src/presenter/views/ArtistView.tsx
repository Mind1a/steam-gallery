import ArtistViewContent from '../components/atoms/artistViewContent/ArtistViewContent';
import Footer from '../components/atoms/footer/Footer';
import Header from '../components/atoms/header/Header';

export default function ArtistView() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Header />
        <ArtistViewContent />
        <Footer />
      </div>
    </>
  );
}
