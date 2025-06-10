export interface Navlink {
  id: string;
  name: string;
}

import Logo from '/assets/svgs/icons/logo.svg';
import Burger1 from '/assets/svgs/icons/burger1.svg';
import Burger2 from '/assets/svgs/icons/burger2.svg';
import AboutUs from '/assets/images/aboutUs.webp';
import AboutUs2 from '/assets/images/aboutUs2.webp';
import Call from '/assets/svgs/icons/call.svg';
import Email from '/assets/svgs/icons/email.svg';
import Location from '/assets/svgs/icons/location.svg';
import FaceBook from '/assets/svgs/icons/facebook.svg';
import Instagram from '/assets/svgs/icons/instagram.svg';

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

export type ImageItemInner = {
  id: string;
  description: string;
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

export const GalleryItemsInner: ImageItemInner[] = [
  {
    id: '1',
    image: '/assets/images/gallery-images/gallery-image-1.jpg',
    title: 'Sunrise over the Majestic Peaks',
    description: `This captivating image captures the dramatic moment as the sun peeks over a range of jagged mountain peaks, casting a warm, golden glow across the landscape. The sky above is a canvas of soft pastels, blending from deep indigos at the horizon to vibrant oranges and soft pinks where the light first touches. Wisps of morning mist gently cling to the valleys and lower slopes, adding a sense of ethereal mystery. The rugged silhouettes of the mountains stand in stark contrast against the emerging light, hinting at their ancient and unyielding nature. One can almost feel the crisp, cool air of dawn and the profound silence of a world just beginning to awaken. This scene evokes a sense of awe and tranquility, inviting viewers to contemplate the vastness and beauty of nature's artistry. It speaks to new beginnings and the quiet grandeur found in remote, untouched wildernesses.`,
  },
  {
    id: '2',
    image: '/assets/images/gallery-images/gallery-image-2.jpg',
    title: 'Autumnal Serenity: A Forest Pathway',
    description: `Step into this enchanting scene depicting a winding pathway through a dense forest, bathed in the rich, warm hues of autumn. The ground is a carpet of fallen leaves, vibrant in shades of crimson, gold, and burnt orange, crunching softly underfoot. Towering trees, their branches still adorned with a kaleidoscope of colorful foliage, form a natural archway overhead, creating a tunnel of vibrant light and shadow. Sunlight filters through the canopy in dappled patterns, illuminating patches of the path and highlighting the intricate textures of tree bark and scattered leaves. The air appears still and crisp, carrying the earthy scent of decaying leaves and damp soil. This image evokes a profound sense of peace and contemplation, inviting viewers to imagine a leisurely stroll through nature's autumnal masterpiece, a moment of escape into the quiet beauty of the changing seasons.`,
  },
  {
    id: '3',
    image: '/assets/images/gallery-images/gallery-image-3.jpg',
    title: 'Golden Hour at the Rugged Coastline',
    description: `This stunning photograph captures the breathtaking beauty of a coastal sunset, where the raw power of the ocean meets the soft, ethereal light of dusk. The sun, a fiery orb, hangs low on the horizon, painting the sky in a spectacular array of fiery oranges, deep reds, and soft purples that reflect vividly on the wet sand. Waves, sculpted by the ocean's relentless energy, crash against a rugged shoreline adorned with dark, ancient rocks, sending up plumes of white spray. The turbulent waters near the shore contrast beautifully with the smoother, reflective surface further out. The scene is imbued with a dramatic yet serene atmosphere, suggesting both the untamed wildness of nature and the transient beauty of a fading day. The air is likely cool and salty, and the roar of the waves a constant, soothing rhythm, making this a perfect representation of coastal tranquility.`,
  },
  {
    id: '4',
    image: '/assets/images/gallery-images/gallery-image-4.jpg',
    title: 'Dynamic Cityscape: Lights of the Metropolis',
    description: `Behold a vibrant cityscape captured at the twilight hour, showcasing the dynamic energy of urban life as darkness descends. Towering skyscrapers pierce the sky, their glass facades reflecting the last vestiges of daylight and the first twinkling lights of the city. Streets below are illuminated by endless trails of car headlights and taillights, blurring into streaks of red and white, signifying constant movement and the pulse of the city. The overall impression is one of immense scale and intricate detail, with countless windows glowing like a constellation against the deepening indigo sky. This image perfectly encapsulates the urban dream, a place where architectural marvels meet a bustling nightlife. It invites contemplation on the lives unfolding within these structures and the endless possibilities that a thriving metropolis offers after sundown, a true testament to human innovation and activity.`,
  },
  {
    id: '5',
    image: '/assets/images/gallery-images/gallery-image-5.jpg',
    title: 'Mirror Lake: Perfect Reflection of Nature',
    description: `This serene image showcases a tranquil lake, its surface so still and clear that it acts as a perfect, undisturbed mirror for the surrounding landscape. Majestic trees, their foliage vibrant with greenery, line the water's edge, their forms duplicated with remarkable clarity in the glassy water below. The sky, a soft blue with gentle cloud formations, is also flawlessly reflected, creating a symmetrical and almost surreal composition. The sense of calm is palpable; there are no ripples to disrupt the illusion, suggesting a moment of absolute stillness in nature. This scene evokes a feeling of profound peace and harmony, inviting viewers to immerse themselves in the quiet beauty of an undisturbed natural setting. It's a reminder of nature's simple yet profound ability to create breathtaking artistry through light, water, and form.`,
  },
  {
    id: '6',
    image: '/assets/images/gallery-images/gallery-image-6.jpg',
    title: 'Vastness of the Arid Desert Landscape',
    description: `Immerse yourself in the expansive and stark beauty of a desert landscape, stretching endlessly under a vast, clear sky. The terrain is characterized by rolling sand dunes, their contours softly sculpted by the wind, exhibiting various shades of ochre, gold, and red that speak to the sun's relentless embrace. Scattered throughout the landscape are unique, resilient desert flora, such as cacti or sparse shrubs, adding texture and a touch of life to the otherwise barren environment. Distant rock formations or mesas rise stoically from the desert floor, their ancient forms hinting at geological history. The air appears dry and clear, allowing for incredible visibility to the distant horizon. This image conveys a sense of profound isolation and timelessness, highlighting the rugged beauty and enduring spirit of a landscape shaped by extreme conditions, yet holding a unique, captivating allure.`,
  },
  {
    id: '7',
    image: '/assets/images/gallery-images/gallery-image-1.jpg', 
    title: 'Mystical Mountain Mist',
    description: `This photograph transports you to a scene where mountains are veiled in a soft, ethereal mist, creating an atmosphere of profound mystery and serenity. The peaks, normally sharp and commanding, are softened by the swirling fog, revealing only hints of their majestic forms. Patches of evergreen trees emerge through the mist, their deep green contrasting with the muted tones of the vapor. The light is diffused, creating gentle gradients of grey and white that merge seamlessly with the obscured horizon. This scene evokes a sense of quiet contemplation, as if the mountains are holding ancient secrets within their cloudy embrace. It suggests a journey into the unknown, a world where the boundaries of reality blur, inviting the viewer to imagine the unseen depths and silent narratives hidden within the clouds. The air feels cool and damp, carrying the scent of damp earth and pine, enhancing the mystical ambiance.`,
  },
  {
    id: '8',
    image: '/assets/images/gallery-images/gallery-image-2.jpg', 
    title: 'Deep within the Enchanted Forest',
    description: `Journey into the heart of an ancient, enchanted forest depicted in this captivating image. Sunlight filters through a dense canopy of leaves, creating luminous shafts of light that pierce the dappled shadows on the forest floor. Towering trees, their trunks covered in moss and ivy, stand like silent sentinels, their branches intertwining far above. The ground is rich with fallen leaves, decaying logs, and vibrant green undergrowth, creating a tapestry of natural textures. The air feels moist and cool, carrying the earthy fragrance of damp soil and ancient wood. This scene evokes a sense of timelessness and wonder, as if stepping into a fairytale. It invites exploration and contemplation, suggesting a hidden world teeming with unseen life and ancient stories, a place where magic feels just within reach, offering a peaceful escape from the bustling world.`,
  },
  {
    id: '9',
    image: '/assets/images/gallery-images/gallery-image-3.jpg', 
    title: 'Dynamic Ocean Waves on a Rocky Shore',
    description: `This powerful image captures the raw, untamed energy of the ocean as formidable waves crash against a rugged, unyielding coastline. The water, a tumultuous mix of deep blues and frothing whites, surges and recedes, revealing the dark, craggy textures of ancient rocks that resist its force. Spray leaps into the air, catching the light and creating a dynamic spectacle of movement and sound, almost allowing one to hear the thunderous roar of the breaking surf. The horizon stretches endlessly, suggesting the vastness of the sea, while the foreground is dominated by the constant battle between water and land. This scene embodies the untamed spirit of nature, a reminder of the immense power and ceaseless motion of the natural world. It evokes a sense of both awe and respect for the ocean's enduring strength and beauty.`,
  },
  {
    id: '10',
    image: '/assets/images/gallery-images/gallery-image-4.jpg', 
    title: 'Urban Tapestry: Night Life and Architecture',
    description: `This compelling urban landscape captures the intricate tapestry of a city illuminated after dark, presenting a vibrant interplay of light, architecture, and human activity. Modern high-rises and historic buildings alike glow with myriad lights, their windows creating a dazzling pattern against the deep twilight sky. Below, the city's arteries pulse with the flow of traffic, car lights streaking across the roads, forming captivating light trails that convey constant motion. The scene highlights the architectural diversity and the sheer scale of the urban environment, where steel, glass, and concrete structures reach towards the heavens. This image invites viewers to contemplate the lives and stories unfolding within this bustling metropolis, showcasing the city as a living, breathing entity that never truly sleeps, a testament to human ingenuity and communal existence.`,
  },
  {
    id: '11',
    image: '/assets/images/gallery-images/gallery-image-5.jpg', 
    title: 'Golden Fields of Autumn Harvest',
    description: `This idyllic rural scene portrays expansive fields bathed in the warm, mellow light of late autumn, signaling the time of harvest. The landscape is dominated by rich golden and amber tones, indicative of ripened crops or dried grasses, stretching towards a distant tree line under a soft, often hazy, sky. The sense of abundance and seasonal change is palpable, as the earth prepares for winter's rest. Perhaps a faint path or tire tracks lead through the fields, hinting at human activity and the culmination of agricultural labor. The overall impression is one of peaceful productivity and the cyclical rhythm of nature. This image evokes feelings of nostalgia, gratitude for nature's bounty, and the quiet beauty of the countryside during a transitional period, inviting contemplation on the simple yet profound aspects of rural life.`,
  },
  {
    id: '12',
    image: '/assets/images/gallery-images/gallery-image-6.jpg', 
    title: 'Infinite Canvas: The Starry Night Sky',
    description: `Gaze upon the awe-inspiring spectacle of a truly dark night sky, brilliantly illuminated by countless stars that appear to stretch into infinity. This image captures the profound beauty of the cosmos, with the Milky Way potentially visible as a shimmering band of light across the celestial expanse, indicating a location far from light pollution. Individual stars twinkle like distant diamonds, varying in brightness and color, hinting at their immense distances and diverse natures. The foreground might feature a subtle silhouette of earthly elements—perhaps trees or a distant horizon—to provide scale against the cosmic backdrop. This scene evokes a deep sense of wonder and humility, inviting contemplation on our place in the universe and the vast, unknown wonders beyond our planet. It’s a powerful reminder of the beauty and mystery that the night sky holds, offering a tranquil escape into the majesty of space.`,
  },
];

export { default as PaginationButton } from '/assets/svgs/icons/pagination-arrow.svg';
export { Logo };
export { Burger1 };
export { Burger2 };
export { AboutUs };
export { AboutUs2 };
export { Call };
export { Email };
export { Location };
export { FaceBook };
export { Instagram };
