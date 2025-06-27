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

// ბავშვების მონაცემების ბაზა //

export type ChildrenItemsType = {
  id: string;
  description?: string;
  images: string[];
  title?: string;
  authorName: string;
  authorEmail: string;
  authorPhoneNumber?: string;
  authorSchool: string;
  authorClassGrade: string;
};

export const ChildrenItems: ChildrenItemsType[] = [
  {
    id: '1',
    images: ['/assets/images/students-images/andria-skhirtladze/andria-1.jpg'],
    authorName: 'ანდრია სხირტლაძე',
    authorEmail: 'andria.skhirtladze2011@gmail.com',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'VIII კლასი',
  },
  {
    id: '2',
    images: ['/assets/images/students-images/andria-skhirtladze/andria-2.jpg'],
    authorName: 'ანდრია სხირტლაძე',
    authorEmail: 'andria.skhirtladze2011@gmail.com',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'VIII კლასი',
  },
  {
    id: '3',
    images: ['/assets/images/students-images/giorgi-ichkiti/giorgi-1.png'],
    title: 'როსტევანმა მსახური გაგზავნა უცხო მოყმის ნახვის დროს',
    description:
      "In a serene riverside clearing, a white knight stands sentinel on the right side, his back turned. He is clad in chain armor and a traditional hat, with his sword resting at his side. Before him, on the left, sits a man in leather and a tiger-skin cape. The tranquil river flows behind them, merging history with nature's peace. The forest is slightly foggy, and the sky is white with a fog",
    authorName: 'გიორგი იჩქითი',
    authorEmail: 'ichkitigiorgi5@gmail.com',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'IX კლასი',
  },
  {
    id: '4',
    images: ['/assets/images/students-images/giorgi-ichkiti/giorgi-2.png'],
    title: 'უცხო მოყმის ნახვა',
    description:
      'Tarieli sitting on a rock by a river in a forest. He wears a tiger skin on his back, chain armor, and has a thick beard. His hair is short, and his face is sad with tears on his cheeks. The forest around him is dark and mysterious, with tall trees and mist rising from the water. There is waterfall in the background. The colors are muted, with deep golds and dark greens, creating a somber and powerful atmosphere, like an ancient legend',
    authorName: 'გიორგი იჩქითი',
    authorEmail: 'ichkitigiorgi5@gmail.com',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'IX კლასი',
  },
  {
    id: '5',
    images: ['/assets/images/students-images/giorgi-ichkiti/giorgi-3.png'],
    title: 'თინათინის დახასიათება',
    description:
      'Draw a princess from Georgia. Her name is Tinatini. She is wearing traditional Georgian clothing. She has a golden crown and is as pretty as the sun. She is wearing a white dress which looks like a Georgian dress. Behind her is an Orthodox church on the mountain. She has white-brownish hair and she is 20-30 years old. Behind her there is a castle too which is in Georgian style. She also has blue colored eyes. Her clothing has a golden theme',
    authorName: 'გიორგი იჩქითი',
    authorEmail: 'ichkitigiorgi5@gmail.com',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'IX კლასი',
  },
  {
    id: '6',
    images: [
      '/assets/images/students-images/merab-bortsvadze/merabi-1-1.jfif',
      '/assets/images/students-images/merab-bortsvadze/merabi-1-2.jfif',
    ],
    title: 'ნადირობის სცენა',
    description:
      'The hunting party, including Avtandil and other knights, is eager and well-prepared. They ride magnificent horses and are accompanied by loyal hounds. The knights, dressed in richly decorated hunting attire, fan out through the forest, each displaying their mastery of the hunt. They carry finely crafted weapons—bows, arrows, and spears—ready for action. Excitement builds as the prey is spotted. A thrilling chase ensues, showcasing the speed and agility of both hunters and their quarry. There are a few archers with bows too. The knights coordinate their efforts with shouts and signals, demonstrating their skill and camaraderie. The prey, often a powerful deer or boar, races through the underbrush in a desperate bid for freedom. Avtandil leads the chase with determination and grace, embodying the ideals of bravery and skill. He is physically strong, has dark hair, wears chain armour.',
    authorName: 'მერაბ ბორცვაძე',
    authorEmail: 'merabibortsvadze@gmail.com',
    authorPhoneNumber: '591 05 08 46',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'IX კლასი',
  },
  {
    id: '7',
    images: [
      '/assets/images/students-images/merab-bortsvadze/merabi-2-1.jfif',
      '/assets/images/students-images/merab-bortsvadze/merabi-2-2.jfif',
    ],
    description:
      'Smoke chokes the night as flames devour the fortress, its blackened walls trembling under the assault. Horses rear, steel clatters, blood darkens the earth. Above, a captive grips cold stone, firelight dancing in fearful eyes as fate nears its reckoning. There is a fortress, The fortress looms, its blackened walls scarred by time. Torches flicker, shadows stretching over iron gates stained with blood. Warriors charge—one - Tall and fierce, his wild black curls frame fire-lit golden eyes. His dark cloak flows over bronze armor, his face shadowed with wrath. second Slender yet strong, his deep-set, keen eyes gleam beneath his helmet. His dark curls, dusted with sweat, cling to his sun-kissed skin. third – Broad-shouldered and powerful, his thick golden beard glows in the firelight. His heavy armor bears battle scars, his gaze fierce and unshaken. they are together',
    authorName: 'მერაბ ბორცვაძე',
    authorEmail: 'merabibortsvadze@gmail.com',
    authorPhoneNumber: '591 05 08 46',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'IX კლასი',
  },
  {
    id: '8',
    images: ['/assets/images/students-images/merab-bortsvadze/merabi-3-1.jfif'],
    description:
      "Smoke chokes the night as flames devour the fortress, its blackened walls trembling under the assault. Horses rear, steel clatters, blood darkens the earth. firelight dancing in fearful eyes as fate nears its reckoning. There is a fortress, The fortress looms, its blackened walls scarred by time. Torches flicker, shadows stretching over iron gates stained with blood. Warriors charge—one - Tall and fierce, his wild black curls frame fire.His dark cloak flows over bronze armor. second - Slender yet strong.His dark curls, dusted with sweat. third – Broad-shouldered and powerful. His heavy armor bears battle scars, his gaze fierce and unshaken. they are together and are facing towards the fortress. we can see them from the back, we can't see their faces.",
    authorName: 'მერაბ ბორცვაძე',
    authorEmail: 'merabibortsvadze@gmail.com',
    authorPhoneNumber: '591 05 08 46',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'IX კლასი',
  },
  {
    id: '9',
    images: [
      '/assets/images/students-images/merab-bortsvadze/merabi-4-1.jfif',
      '/assets/images/students-images/merab-bortsvadze/merabi-4-2.jfif',
      '/assets/images/students-images/merab-bortsvadze/merabi-4-3.jfif',
    ],
    title: 'ანდერძის წერის ეპიზოდი "ვეფხისტყაოსნიდან"',
    description:
      'Avtandil sat in his dimly lit chamber, a candle flickering beside him. The walls, adorned with golden tapestries, cast long shadows. Dressed in a armor, his face was solemn, eyes filled with longing. He dipped his quill in ink, writing to Tinatin. Outside, the moon bathed the palace gardens in silver light, rustling leaves whispering farewell. His loyal servant stood nearby, ready to deliver the letter. Every word carried love and sorrow—his heart bound to Tinatin, yet honor calling him away into the unknown.',
    authorName: 'მერაბ ბორცვაძე',
    authorEmail: 'merabibortsvadze@gmail.com',
    authorPhoneNumber: '591 05 08 46',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'IX კლასი',
  },
  {
    id: '10',
    images: ['/assets/images/students-images/merab-bortsvadze/merabi-5-1.jfif'],
    title: 'თინათინის გამეფების ეპიზოდი',
    description:
      'The grand hall shimmered with golden light, torches casting flickering shadows on towering marble columns. The high ceiling was adorned with intricate carvings of past kings, their solemn faces gazing down. A crimson carpet stretched towards a golden throne, where Tinatin stood, regal and poised. Her flowing gown, embroidered with silver threads, cascaded to the floor. A heavy jeweled crown rested on her dark braids. The old king, draped in royal robes, placed a hand upon her head in blessing. Around them, noblemen in silk and armor knelt, their swords gleaming. Outside, trumpets blared, and the city roared in celebration.',
    authorName: 'მერაბ ბორცვაძე',
    authorEmail: 'merabibortsvadze@gmail.com',
    authorPhoneNumber: '591 05 08 46',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'IX კლასი',
  },
  {
    id: '11',
    images: [
      '/assets/images/students-images/rati-butkhuzi/rati-1-1.jpg',
      '/assets/images/students-images/rati-butkhuzi/rati-1-2.jpg',
      '/assets/images/students-images/rati-butkhuzi/rati-1-3.jpg',
      '/assets/images/students-images/rati-butkhuzi/rati-1-4.jpg',
      '/assets/images/students-images/rati-butkhuzi/rati-1-5.jpg',
      '/assets/images/students-images/rati-butkhuzi/rati-1-6.jpg',
      '/assets/images/students-images/rati-butkhuzi/rati-1-7.jpg',
    ],
    title: 'ქაჯეთის ციხის აღების სცენა',
    authorName: 'რატი ბუთხუზი',
    authorEmail: 'butkhuzirati66@gmail.com',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'VIII კლასი ',
  },
  {
    id: '12',
    images: ['/assets/images/students-images/rati-butkhuzi/rati-2-1.jpg'],
    title: 'სცენა ვეფხისტყაოსნიდან “ტარიელი მდინარის პირას”',
    description:
      'Create an image of a medieval warrior, Tariel, sitting by a quiet riverbank under the soft glow of the moonlight. He is draped in a dark panther-skin cloak, symbolizing his noble yet tragic existence. His long, unkempt hair flows over his shoulders, and his sorrowful eyes gaze into the shimmering water, reflecting his grief. The river glistens as the moonlight dances upon its surface, surrounded by dense, shadowy forests that add a sense of solitude and melancholy. His sword rests beside him, half-buried in the grass, as if abandoned in his despair. Fireflies flicker around him, their soft glow enhancing the dreamlike and melancholic atmosphere. His posture is slumped, hands resting on his knees, his expression a mix of sorrow and deep contemplation. The scene should evoke a dramatic and emotional tone, capturing his loneliness and longing. The colors should be rich yet moody—deep blues, silvers, and muted greens—to emphasize the night setting and the weight of his emotions. The overall composition should feel cinematic, almost like a moment frozen in time, filled with sorrow and poetic beauty.',
    authorName: 'რატი ბუთხუზი',
    authorEmail: 'butkhuzirati66@gmail.com',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'VIII კლასი ',
  },
  {
    id: '13',
    images: [
      '/assets/images/students-images/rati-gigauri/rati-g-1-1.jpg',
      '/assets/images/students-images/rati-gigauri/rati-g-1-2.jpg',
    ],
    authorName: 'რატი გიგაური',
    authorEmail: 'ratigigauri85@gmail.com',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'VIII კლასი ',
  },
  {
    id: '14',
    images: [
      '/assets/images/students-images/rati-gigauri/rati-g-2-1.jpg',
      '/assets/images/students-images/rati-gigauri/rati-g-2-2.jpg',
    ],
    authorName: 'რატი გიგაური',
    authorEmail: 'ratigigauri85@gmail.com',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'VIII კლასი ',
  },
  {
    id: '15',
    images: [
      '/assets/images/students-images/saba-jolbordi/saba-1-1.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-1-2.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-1-3.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-1-4.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-1-5.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-1-6.jpg',
    ],
    title: 'ნესტანისა და ტარიელის შეყრა',
    description:
      'In the shadow of Kajat Fortress, amidst the remnants of battle, the young Georgian warrior stands, his body battered yet resolute. His chainmail shirt, worn from the fierce fight, glistens faintly in the dim light of the fortress. The metal links are battered, showing the signs of his struggle—a few dents and scrapes from the swords of the enemy. His face, young and determined, is smeared with the dust of battle, but his eyes reflect a sense of unwavering strength. His sword, a sharp Georgian blade, rests by his side, and several small knives are secured to his belt, tools of both war and survival. The woman, whom he has just freed, stands before him, her face awash with relief and gratitude. She, too, is Georgian, her long hair tangled from captivity but her spirit now ignited with newfound hope. In this moment, their eyes meet, and without words, they understand each other—the battle, the pain, and the joy of survival. As they embrace, the man’s battle-worn appearance is unmistakable. He has fought with everything he had to free her, and now, in the quiet aftermath, he holds her with care, feeling the weight of his victory and the toll it took. The fortress around them, a symbol of oppression now fallen, seems almost to fade away as they stand together in the aftermath of both violence and redemption. The sun begins to rise behind them, casting a golden light over the land, a beacon of hope for the future. In this tender moment, the young Georgian warrior, still catching his breath from the battle, feels a deep sense of fulfillment—he has fought not just for a cause, but for the woman he has now freed',
    authorName: 'საბა ჯოლბორდი',
    authorEmail: 'jolbordisaba@gmail.com',
    authorPhoneNumber: '599 54 22 17',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'VIII კლასი ',
  },
  {
    id: '16',
    images: [
      '/assets/images/students-images/saba-jolbordi/saba-2-1.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-2-2.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-2-3.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-2-4.jpg',
    ],
    title: 'ქაჯეთის ციხის აღება',
    description:
      'A powerful Georgian warrior from the 12th century, Fridon, is undertaking a perilous mission to infiltrate the notorious Kajeti Castle, often referred to in legends as the stronghold of demons. The scene unfolds under the cover of night, with the towering stone walls of the castle looming ominously in the distance. Fridon, a formidable fighter, moves with purpose across a rope that stretches from a mountain to the castle. In his hand, he grips a traditional Georgian fighter’s sword, the khmali, with a curved hilt and a slightly curved blade. The sword, a symbol of the warrior’s heritage, glints in the dim light as he crosses. His medium-length black hair flows in the wind, and his small, straight mustache adds to his fierce expression. Fridon’s muscular build and strength are evident as he balances skillfully on the rope, undeterred by the dangers that lie ahead. Kajeti Castle, known for its eerie reputation, stands as a fortress filled with danger, home to the terrifying demons or ‘kaqebi’ of legend. Fridon’s face shows unyielding resolve as he approaches the stronghold, aware of the supernatural threats that await him but determined to succeed.',
    authorName: 'საბა ჯოლბორდი',
    authorEmail: 'jolbordisaba@gmail.com',
    authorPhoneNumber: '599 54 22 17',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'VIII კლასი ',
  },
  {
    id: '17',
    images: [
      '/assets/images/students-images/saba-jolbordi/saba-3-1.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-3-2.jpg',
    ],
    title: 'თინათინის გამეფება',
    authorName: 'საბა ჯოლბორდი',
    authorEmail: 'jolbordisaba@gmail.com',
    authorPhoneNumber: '599 54 22 17',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'VIII კლასი ',
  },
  {
    id: '18',
    images: [
      '/assets/images/students-images/saba-jolbordi/saba-4-1.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-4-2.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-4-3.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-4-4.jpg',
      '/assets/images/students-images/saba-jolbordi/saba-4-5.jpg',
    ],
    title: 'უცხო მოყმის გამოჩენის ეპიზოდი',
    description:
      "A heroic Georgian warrior from the 12th century with a straight and small mustache, wearing a cloak made of tiger fur, with a headpiece fashioned from the same material and a tiger's-eye hat on his head. The warrior’s strong arms are adorned with leather straps, holding a large whip in one hand, contrasting with the elegant nature of his attire. The warrior sits by the edge of a river, his head bowed low in sadness, tears glistening in his eyes as he cries. Behind him, a black horse, saddled with a golden harness, stands patiently, its mane wild in the wind, waiting for the warrior. The scene exudes a mystical aura, with the water reflecting the warrior's figure. The warrior’s expression is filled with sorrow and reflection, surrounded by scattered pearls on the ground. The background is lush, full of natural beauty, and evokes the historical atmosphere of the 12th century, enhancing the ethereal and medieval setting. The scene is realistic, as if captured in a moment of intense emotion, with every detail appearing lifelike",
    authorName: 'საბა ჯოლბორდი',
    authorEmail: 'jolbordisaba@gmail.com',
    authorPhoneNumber: '599 54 22 17',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'VIII კლასი ',
  },
];

// ------------------------ //

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
