export interface Navlink {
  id: string;
  name: string;
}

import Logo from '/assets/svgs/icons/logo.svg';
import Burger1 from '/assets/svgs/icons/burger1.svg';
import Burger2 from '/assets/svgs/icons/burger2.svg';

export const Navlinks: Navlink[] = [
  {
    id: 'home',
    name: 'მთავარი',
  },
  {
    id: 'about-us',
    name: 'ჩვენ შესახებ',
  },
  {
    id: 'contact',
    name: 'კონტაქტი',
  },
];

export type ImageItem = {
  image: string;
  title: string;
};

export const SliderItems: ImageItem[] = [
  {
    image: './assets/images/slider-image.png',
    title: 'slide 1',
  },
  {
    image: './assets/images/slider-image.png',
    title: 'slide 2',
  },
  {
    image: './assets/images/slider-image.png',
    title: 'slide 3',
  },
];

export const GalleryItems: ImageItem[] = [
  {
    image: './assets/images/gallery-images/gallery-image-1.jpg',
    title: 'gallery image 1',
  },
  {
    image: './assets/images/gallery-images/gallery-image-2.jpg',
    title: 'gallery image 2',
  },
  {
    image: './assets/images/gallery-images/gallery-image-3.jpg',
    title: 'gallery image 3',
  },
  {
    image: './assets/images/gallery-images/gallery-image-4.jpg',
    title: 'gallery image 4',
  },
  {
    image: './assets/images/gallery-images/gallery-image-5.jpg',
    title: 'gallery image 5',
  },
  {
    image: './assets/images/gallery-images/gallery-image-6.jpg',
    title: 'gallery image 6',
  },
  {
    image: './assets/images/gallery-images/gallery-image-1.jpg',
    title: 'gallery image 1',
  },
  {
    image: './assets/images/gallery-images/gallery-image-2.jpg',
    title: 'gallery image 2',
  },
  {
    image: './assets/images/gallery-images/gallery-image-3.jpg',
    title: 'gallery image 3',
  },
  {
    image: './assets/images/gallery-images/gallery-image-4.jpg',
    title: 'gallery image 4',
  },
  {
    image: './assets/images/gallery-images/gallery-image-5.jpg',
    title: 'gallery image 5',
  },
  {
    image: './assets/images/gallery-images/gallery-image-6.jpg',
    title: 'gallery image 6',
  },
];

export { default as PaginationButton } from '/assets/svgs/icons/pagination-arrow.svg';
export {Logo};
export {Burger1};
export {Burger2};