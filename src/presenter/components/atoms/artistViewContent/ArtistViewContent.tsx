import { useEffect, useState } from 'react';
import { ChildrenItems, ChildrenItemsType } from '../../../assets';
import { useParams } from 'react-router-dom';
import GalleryModal from './GalleryModal';
import ArtistDetails from './ArtistDetails';
import SeeAlsoSection from './SeeAlsoSection';
import ArtistImagesGallery from './ArtistImagesGallery';

export default function ArtistViewContent() {
  // ------- open modal -------- //
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    if (openModal) setOpenModal(false);
  };

  // ------- id for current item from dynamic routing ----------//
  const { id } = useParams<{ id: string }>();

  // ------- states for defining current item and main image ----------//
  const [galleryMain, setGalleryMain] = useState<string>('');
  const [currentItem, setCurrentItem] = useState<ChildrenItemsType>();
  const [matchedContent, setMatchedContent] = useState<ChildrenItemsType[]>([]);

  // ------- handling items change deppending on router id ----------//
  useEffect(() => {
    const foundItem = ChildrenItems.find((item) => item.id === id);
    const matched = ChildrenItems.filter(
      (item) => foundItem?.authorName === item.authorName
    );
    if (foundItem) {
      setCurrentItem(foundItem);
      setGalleryMain(foundItem.images?.[0]);
      setMatchedContent(matched);
    }
  }, [id]);

  // ------- nadle scroll behaviour ----------//

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [openModal]);

  if (!currentItem) return null;

  console.log(currentItem);

  return (
    <div className="relative flex flex-col flex-1 gap-6 md:gap-12 px-6 lg:px-[49px]">
      {/* modal */}
      {openModal && (
        <GalleryModal images={currentItem.images} closeModal={closeModal} />
      )}
      {/* Upper section with images gallery and product info */}
      <section className="flex md:flex-row flex-col justify-between gap-4 md:gap-0 mt-2 md:mt-[60px] max-w-[1442px]">
        <ArtistImagesGallery
          openModal={openModal}
          setOpenModal={setOpenModal}
          galleryMain={galleryMain}
          setGalleryMain={setGalleryMain}
          currentItem={currentItem}
        />
        <ArtistDetails currentItem={currentItem} />
      </section>
      {/* Bottom section with 'See also' elements */}
      <SeeAlsoSection matchedContent={matchedContent} />
    </div>
  );
}
