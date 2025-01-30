export interface Navlink {
  id: string;
  name: string;
}

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

export type SliderItem = {
  image: string;
  title: string;
};

export const SliderItems: SliderItem[] = [
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
