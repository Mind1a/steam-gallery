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
    image: '/assets/images/students-images/merab-bortsvadze/merabi-4-1.jfif',
    title: 'slide 1',
  },
  {
    image: '/assets/images/students-images/merab-bortsvadze/merabi-4-2.jfif',
    title: 'slide 2',
  },
  {
    image: '/assets/images/students-images/merab-bortsvadze/merabi-4-3.jfif',
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
    description:
      'შოთა რუსთაველის „ვეფხისტყაოსნის“ მიერ შთაგონებული შუა საუკუნეების ბრძოლის დრამატული სცენა - კაჟეთის ციხის აღება. სამი მამაცი ქართველი მეომარი გვერდიგვერდ დგას კლდოვან მთის უღელტეხილზე. მათ უკან კაჟეთის მძლავრი ქვის ციხე-სიმაგრე აღმართულა. მათ აცვიათ ტრადიციული ქართული აბჯარი, მოსასხამები ქარში უფრიალებთ და სახეზე მონდომება აღბეჭდიათ. ცა მზის ჩასვლის მანათობელ ფერებშია შეღებილი. ატმოსფერო დაძაბული და გმირულია, რაც განასახიერებს ერთიანობას, სიმამაცესა და სამართლიანობის ტრიუმფს. სცენა მდიდარია ისტორიული დეტალებითა და დრამატული ენერგიით, რაც ეხმიანება ქართული ეპოსის სულს.',
  },
  {
    id: '2',
    images: ['/assets/images/students-images/andria-skhirtladze/andria-2.jpg'],
    authorName: 'ანდრია სხირტლაძე',
    authorEmail: 'andria.skhirtladze2011@gmail.com',
    authorSchool: 'მეორე საჯარო სკოლა',
    authorClassGrade: 'VIII კლასი',
    description:
      'ერთი მარტოხელა შუა საუკუნეების ქართველი მეომარი სევდიანად დგას კაჟეთის ციხის კედლების წინ. გამოსახულება შთაგონებულია „ვეფხისტყაოსნის“ ლეგენდარული მომენტით. მას აცვია ტრადიციული ქართული აბჯარი და მტკიცედ უჭირავს ხმალი. მისი მოსასხამი და გრძელი თმა ქარში ფრიალებს. მის უკან ციხე-სიმაგრე აღმართულია ციცაბო მთის კლდეზე. განწყობა პოეტური და ძლიერია – გადმოსცემს გმირის შინაგან ძალას, თავგანწირვასა და შეუპოვრობას ბრძოლის წინ. კინემატოგრაფიული, ფერწერული სცენა, სავსე ემოციით, სიმბოლიკითა და ეპიკური შინაარსით.',
  },
  {
    id: '3',
    images: ['/assets/images/students-images/giorgi-ichkiti/giorgi-1.png'],
    title: 'როსტევანმა მსახური გაგზავნა უცხო მოყმის ნახვის დროს',
    description:
      'მდინარის პირას მდებარე წყნარ გაკვეთილში, მარჯვენა მხარეს დარაჯად დგას თეთრი რაინდი, ზურგით შემობრუნებული. მას აცვია ჯაჭვის პერანგი და ტრადიციული ქუდი, ხმალი კი გვერდით უდევს. მის წინ, მარცხენა მხარეს, ზის მამაკაცი ტყავის სამოსითა და ვეფხვის ტყავის მოსასხამით. მათ უკან მშვიდი მდინარე მოედინება, რომელიც ისტორიას ბუნების სიმშვიდესთან აერთიანებს. ტყე ოდნავ ნისლიანია, ცა კი თეთრი ნისლით არის დაფარული.',
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
      'ტარიელი ზის კლდეზე, მდინარის პირას, ტყეში. მას ზურგზე ვეფხვის ტყავი აფარია, აცვია ჯაჭვის პერანგი და აქვს სქელი წვერი. მისი თმა მოკლეა, სახე კი სევდიანი, ცრემლებით დასველებული ლოყებით. ირგვლივ ტყე ბნელი და იდუმალია, მაღალი ხეებითა და წყლიდან ამოსული ნისლით. უკანა პლანზე ჩანჩქერია. ფერები მდუმარეა, ღრმა ოქროსფერი და მუქი მწვანე ტონებით, რაც პირქუშ და მძლავრ ატმოსფეროს ქმნის, როგორც ძველი ლეგენდა.',
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
      'დახატე ქართველი პრინცესა. მისი სახელია თინათინი. მას აცვია ტრადიციული ქართული სამოსი. მას აქვს ოქროს გვირგვინი და მზესავით ლამაზია. მას აცვია თეთრი კაბა, რომელიც ქართულ კაბას ჰგავს. მის უკან მთაზე მართლმადიდებლური ეკლესიაა. მას აქვს თეთრ-მოყავისფრო თმა და ის 20-30 წლისაა. მის უკან ასევე არის ციხე, რომელიც ქართულ სტილშია. მას ასევე აქვს ცისფერი თვალები. მის სამოსს ოქროსფერი თემა აქვს.',
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
      'სანადირო რაზმი, ავთანდილის და სხვა რაინდების ჩათვლით, სავსეა ენთუზიაზმით და კარგად მომზადებული. ისინი ამხედრებულნი არიან დიდებულ ცხენებზე და თან ახლავთ ერთგული მონადირე ძაღლები. რაინდები, მდიდარი ორნამენტებით მორთულ სანადირო სამოსში გამოწყობილნი, ტყეში იშლებიან, თითოეული მათგანი ნადირობის ოსტატობას ავლენს. მათ ატარებენ დახვეწილად დამზადებულ იარაღს — მშვილდებს, ისრებს და შუბებს — მზად მოქმედებისთვის. მღელვარება მატულობს ნადირის შემჩნევისას. იწყება ამაღელვებელი დევნა, რაც მონადირეებისა და მათი ნადირის სისწრაფესა და მოქნილობას აჩვენებს. ასევე არის რამდენიმე მშვილდოსანიც მშვილდებით. რაინდები კოორდინაციას უწევენ თავიანთ ძალისხმევას შეძახილებითა და სიგნალებით, რითაც თავიანთ ოსტატობასა და ამხანაგობას ამტკიცებენ. ნადირი, ხშირად ძლიერი ირემი ან ტახი, სასოწარკვეთილი თავისუფლებისთვის ბრძოლაში ტყის ბუჩქნარში მიქრის. ავთანდილი დევნას მონდომებითა და მოხდენილად უძღვება, რაც სიმამაცისა და ოსტატობის იდეალებს განასახიერებს. ის ფიზიკურად ძლიერია, აქვს მუქი თმა, აცვია ჯაჭვის აბჯარი.',
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
      'კვამლი ახრჩობს ღამეს, ცეცხლი კი ციხე-სიმაგრეს შთანთქავს, მისი გაშავებული კედლები იერიშის ქვეშ კანკალებს. ცხენები ყალყზე დგებიან, ფოლადი ჟღარუნებს, სისხლი აბნელებს მიწას. ცეცხლის შუქი შეშინებულ თვალებში ცეკვავს, როცა ბედისწერა სამსჯავროს უახლოვდება. არის ციხე-სიმაგრე, რომელიც პირქუშად აღმართულა, მისი გაშავებული კედლები დროის ნაიარევებით არის დაფარული. ჩირაღდნები ციმციმებენ, ჩრდილები კი სისხლით შეღებილ რკინის ჭიშკრებზე იჭიმება. მეომრები იერიშზე მიდიან: პირველი — მაღალი და მრისხანე, მისი ველური შავი ხვეული თმა ცეცხლს უგავს. მისი მუქი მოსასხამი ბრინჯაოს აბჯარზე ფრიალებს. მეორე — გამხდარი, მაგრამ ძლიერი. მისი მუქი ხვეული თმა ოფლით არის დანამული. მესამე — განიერმხრებიანი და ძლევამოსილი. მის მძიმე აბჯარზე ბრძოლის ნაიარევები ემჩნევა, მისი მზერა მრისხანე და ურყევია. ისინი ერთად დგანან და ციხე-სიმაგრისკენ არიან მიმართულნი. მათ ზურგიდან ვხედავთ, სახეები არ უჩანთ.',
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
      'ავთანდილი თავის ბუნდოვნად განათებულ ოთახში იჯდა, გვერდით სანთელი ციმციმებდა. კედლები, ოქროსფერი გობელენებით მორთული, გრძელ ჩრდილებს აჩენდა. აბჯარში გამოწყობილი, მისი სახე სერიოზული იყო, თვალები კი მონატრებით სავსე. მან კალამი მელანში ჩააწო და თინათინს სწერდა. გარეთ, მთვარის შუქი ვერცხლისფრად აბანავებდა სასახლის ბაღებს, შრიალა ფოთლები კი დამშვიდობების ჩურჩულს გამოსცემდნენ. მისი ერთგული მსახური იქვე იდგა, მზად წერილის ჩასაბარებლად. ყოველი სიტყვა სიყვარულსა და მწუხარებას ატარებდა — მისი გული თინათინთან იყო შეკრული, მაგრამ ღირსება უცნობისკენ უხმობდა.',
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
      'დიდი დარბაზი ოქროსფრად ბრწყინავდა, ჩირაღდნები კი მოციმციმე ჩრდილებს აჩენდნენ მაღალ მარმარილოს სვეტებზე. მაღალი ჭერი მორთული იყო წარსული მეფეების დახვეწილი ჩუქურთმებით, მათი სევდიანი სახეები ქვემოთ იყურებოდნენ. მეწამული ხალიჩა ოქროს ტახტისკენ იყო გაშლილი, სადაც თინათინი იდგა, დიდებული და აუღელვებელი. მისი ფართო კაბა, ვერცხლისფერი ძაფებით მოქარგული, იატაკზე ცვიოდა. მძიმე, ძვირფასი თვლებით შემკული გვირგვინი მის მუქ ნაწნავებზე იდო. მოხუცმა მეფემ, სამეფო მოსასხამში გახვეულმა, ხელი თავზე დაადო კურთხევის ნიშნად. მათ ირგვლივ, აბრეშუმსა და აბჯარში გამოწყობილი დიდებულები მუხლებზე იდგნენ, მათი ხმლები ბრწყინავდა. გარეთ, საყვირები გაისმა და ქალაქი ზეიმობდა.',
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
    description:
      'ვეფხისტყაოსნიდან ქაჯეთის ციხის აღების სცენას, ეს არის ერთ-ერთი ყველაზე დრამატული და მნიშვნელოვანი ეპიზოდი პოემაში. მოკლედ, სცენა ასე განვითარდა: მას შემდეგ, რაც ნესტან-დარეჯანი ქაჯებმა მოიტაცეს, ტარიელი, ავთანდილი და ფრიდონი გადაწყვეტენ მის გადარჩენას და ქაჯეთის ციხეზე იერიშს. მომზადება და გეგმის შედგენა: გმირები საგულდაგულოდ ამზადებენ გეგმას. მათ იციან, რომ ციხე ძლიერ გამაგრებულია და მტრები მრავალრიცხოვანნი არიან. ისინი იყენებენ სამხედრო ეშმაკობას და მოულოდნელობის ეფექტს. იერიში ციხეზე: ფრიდონი საზღვაო გზით უახლოვდება ციხეს და ზღვიდან შედის ბრძოლაში თავისი ლაშქრით. ტარიელი და ავთანდილი ხმელეთიდან უტევენ, თუმცა ისინი ცდილობენ, თავდაპირველად მტრის ყურადღება ზღვაზე გადაიტანონ. თავგანწირული ბრძოლა: გმირები და მათი მეომრები სასტიკ ბრძოლას მართავენ ქაჯებთან. ბრძოლა აღწერილია ძალიან დინამიურად და სისხლიანად. ტარიელი და ავთანდილი უდიდეს მამაცობასა და მეომრულ ოსტატობას ავლენენ. ციხეში შეღწევა: გმირები ახერხებენ ციხის აღებას, მტრის დამარცხებას და ნესტან-დარეჯანის გათავისუფლებას. ეს სცენა არის გმირობის, ერთგულების, თავგანწირვისა და მეგობრობის სიმბოლო. იგი ხაზს უსვამს ქართული საბრძოლო სულისკვეთებას და რაინდულ ღირებულებებს. პოემაში დეტალურად არის აღწერილი თითოეული გმირის მონაწილეობა ბრძოლაში, მათი პირადი თავდადება და საბრძოლო სტრატეგია.',
  },
  {
    id: '12',
    images: ['/assets/images/students-images/rati-butkhuzi/rati-2-1.jpg'],
    title: 'სცენა ვეფხისტყაოსნიდან “ტარიელი მდინარის პირას”',
    description:
      'შექმენით შუა საუკუნეების მეომრის, ტარიელის გამოსახულება, რომელიც ზის მდინარის წყნარ ნაპირზე, მთვარის რბილი შუქის ქვეშ. მას აცვია მუქი ვეფხისტყაოსნის მოსასხამი, რაც მისი კეთილშობილური, მაგრამ ტრაგიკული არსებობის სიმბოლოა. მისი გრძელი, გაუპარსავი თმა მხრებზე ეფინება, სევდიანი თვალები კი მოციმციმე წყალს მისჩერებია, რაც მის მწუხარებას ასახავს. მდინარე ბრწყინავს, რადგან მთვარის შუქი მის ზედაპირზე ცეკვავს, გარშემო კი ხშირი, ჩრდილიანი ტყეები მარტოობისა და მელანქოლიის შეგრძნებას მატებს. მისი ხმალი მის გვერდით დევს, ნახევრად ჩამარხული ბალახში, თითქოს სასოწარკვეთილებაში მიტოვებული. ციცინათელები ციმციმებენ მის გარშემო, მათი რბილი ნათება აძლიერებს სიზმრისებრ და მელანქოლიურ ატმოსფეროს. მისი პოზა მოხრილია, ხელები მუხლებზე უწყვია, სახეზე კი მწუხარებისა და ღრმა ფიქრის ნარევია. სცენამ უნდა გამოიწვიოს დრამატული და ემოციური განწყობა, რაც მის მარტოობასა და მონატრებას გადმოსცემს. ფერები უნდა იყოს მდიდარი, მაგრამ პირქუში — მუქი ლურჯი, ვერცხლისფერი და მდუმარე მწვანე — რათა ხაზი გაესვას ღამის გარემოსა და მისი ემოციების სიმძიმეს. მთლიანი კომპოზიცია კინემატოგრაფიულად უნდა გამოიყურებოდეს, თითქოს დროში გაყინული მომენტი იყოს, სავსე მწუხარებითა და პოეტური სილამაზით.',
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
    title: 'ქაჯეთის ციხის აღება',
    description:
      "ეს გამოსახულება არის 'ვეფხისტყაოსნის' ის ეპიზოდი, სადაც ტარიელი, ავთანდილი და ფრიდონი თავიანთ ლაშქართან ერთად ქაჯეთის ციხის ასაღებად მიდიან ნესტან-დარეჯანის გასათავისუფლებლად. გმირების მზადყოფნა: რაინდების მონდომებული პოზა და წინსვლა ასახავს მათ უშიშრობასა და მზადყოფნას, შეებრძოლონ მტერს. ციხე-სიმაგრე: ციხის არსებობა პირდაპირ მიანიშნებს ქაჯეთის ციხეზე, რომელიც პოემის ერთ-ერთი საკვანძო ობიექტია. მასშტაბი: მრავალრიცხოვანი ლაშქარი ხაზს უსვამს ბრძოლის მასშტაბურობასა და სირთულეს, რაც შეესაბამება პოემაში აღწერილ მოვლენებს. დრამატული განათება: მზის ჩასვლის ან ამოსვლის ფერები ქმნის მძაფრ და გმირულ ატმოსფეროს, რაც კარგად გადმოსცემს გადამწყვეტი ბრძოლის წინარე დაძაბულობას და მნიშვნელობას.",
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
      'XII საუკუნის ძლევამოსილი ქართველი მეომარი, ფრიდონი, სახიფათო მისიას ასრულებს, რათა შეაღწიოს საშინელ ქაჯეთის ციხეში, რომელსაც ლეგენდებში ხშირად დემონების ციტადელად მოიხსენიებენ. სცენა ღამის საფარქვეშ ვითარდება, ციხის მაღალი ქვის კედლები საშიშად მოჩანს შორიდან. ფრიდონი, ძლიერი მებრძოლი, მიზანმიმართულად მოძრაობს თოკზე, რომელიც მთიდან ციხემდეა გადაჭიმული. ხელში მას უჭირავს ტრადიციული ქართული საბრძოლო ხმალი – ხმალი მოხრილი ტარითა და ოდნავ მოხრილი პირით. ხმალი, მეომრის მემკვიდრეობის სიმბოლო, მკრთალ შუქზე ელვარებს გადასვლისას. მისი საშუალო სიგრძის შავი თმა ქარში ფრიალებს, მისი პატარა, სწორი ულვაში კი მის მრისხანე გამომეტყველებას კიდევ უფრო ამძაფრებს. ფრიდონის დაკუნთული აღნაგობა და ძალა აშკარაა, როდესაც ის ოსტატურად ინარჩუნებს წონასწორობას თოკზე, შეუპოვრად უმკლავდება წინ არსებულ საფრთხეებს. ქაჯეთის ციხე, თავისი შემზარავი რეპუტაციით ცნობილი, საშიშროებით სავსე ციხე-სიმაგრედ დგას, ლეგენდის საშინელი დემონების, ანუ "ქაჯების" სამყოფელი. ფრიდონის სახე ურყევ გადაწყვეტილებას გამოხატავს, როდესაც ის უახლოვდება ციტადელს, იცის რა მოსალოდნელი ზებუნებრივი საფრთხეები, მაგრამ მტკიცედ აქვს გადაწყვეტილი წარმატების მიღწევა.',
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
    description:
      'თინათინი ტახტზე: ფოტოს ცენტრში თინათინია, რომელიც სამეფო ტახტზე ზის. ის გამეფებისთვის შესაფერის, მდიდრულ, ოქროსფრად მოქარგულ სამოსშია გამოწყობილი, რაც მის სამეფო სტატუსსა და მაღალ წოდებას უსვამს ხაზს. მისი თავზე მძიმე, მოჩუქურთმებული გვირგვინი ამშვენებს, რაც ახალი მეფის ატრიბუტია. მისი პოზა - მშვიდი, მაგრამ მტკიცე - გადმოსცემს მის თანდაყოლილ სიბრძნესა და მზადყოფნას მმართველობისთვის. თინათინის სახეზეც კი, მიუხედავად იმისა, რომ სრულად არ ჩანს, იგრძნობა მისი საზეიმო და პასუხისმგებლობით სავსე განწყობა. სამეფო დარბაზი: ფონზე ჩანს დიდებული სამეფო დარბაზი მაღალი, მოჩუქურთმებული სვეტებით და რთული ორნამენტებით, რაც ქმნის საზეიმო და ამაღლებულ ატმოსფეროს. ოქროსფერი განათება, სავარაუდოდ, ჩირაღდნებიდან ან სანთლებიდან მოდის, რაც სცენას ბრწყინვალებას მატებს. დიდებულები და ხალხი: ტახტის ირგვლივ თავმოყრილნი არიან დიდებულები და ვეზირები, ზოგიერთ მათგანს წვერი აქვს, რაც მათ ასაკსა და გამოცდილებაზე მიანიშნებს. ფოტოს წინა პლანზე, ტახტის ძირში, მუხლებზე დგას ერთი მოხუცი მამაკაცი, რაც ხაზს უსვამს თინათინის ძალაუფლებას და ქვეშევრდომთა პატივისცემას. ეს სცენა ასახავს იმ მომენტს, როდესაც დიდებულები და ხალხი აღიარებენ ახალ მმართველს და ერთგულებას უცხადებენ მას. პოემის მიხედვით, ეს იყო როსტევან მეფის გადაწყვეტილება, რომელმაც თინათინი სიცოცხლეშივე გაამეფა, რათა დაენახა, როგორ გაართმევდა თავს ქვეყნის მართვას.',
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
      'XII საუკუნის გმირული ქართველი მეომარი, სწორი და პატარა ულვაშით, შემოსილი ვეფხვის ბეწვის მოსასხამით, ამავე მასალისგან შექმნილი თავსაბურავითა და ვეფხვისთვალა ქუდით. მეომრის ძლიერი ხელები ტყავის სამაგრებით არის დამშვენებული, ერთ ხელში კი დიდი მათრახი უჭირავს, რაც კონტრასტს ქმნის მისი სამოსის ელეგანტურ ბუნებასთან. მეომარი მდინარის ნაპირას ზის, თავი მწუხარებისგან დაბლა აქვს დახრილი, თვალებში ცრემლები უელავს და ტირის. მის უკან შავი ცხენი დგას მოთმინებით, ოქროსფერი აღკაზმულობით, მისი ფაფარი ქარში ფრიალებს, ელოდება მეომარს. სცენა მისტიკურ აურას აფრქვევს, წყალი მეომრის ფიგურას ირეკლავს. მეომრის გამომეტყველება მწუხარებითა და ჩაფიქრებითაა სავსე, ირგვლივ მიწაზე მიმოფანტული მარგალიტებით. ფონი მდიდარია, სავსე ბუნებრივი სილამაზით და XII საუკუნის ისტორიულ ატმოსფეროს იწვევს, რაც აძლიერებს ზღაპრულ და შუა საუკუნეების გარემოს. სცენა რეალისტურია, თითქოს დაფიქსირებულია ძლიერი ემოციების მომენტში, ყოველი დეტალი ცოცხლად გამოიყურება.',
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

type AboutUsContentType = {
  id: number;
  content: string;
};

export const aboutUsContent: AboutUsContentType[] = [
  {
    id: 1,
    content:
      'მოხარული ვართ წარმოგიდგინოთ უნიკალური პროექტი, რომელიც აერთიანებს ქართული ლიტერატურის შედევრს – შოთა რუსთაველის „ვეფხისტყაოსანს“ – და თანამედროვე ტექნოლოგიებს. ამ ვებგვერდზე განთავსებულია „ვეფხისტყაოსნის“ სხვადასხვა ეპიზოდის ამსახველი ვიზუალური მასალა, რომელიც გორის მეორე საჯარო სკოლის მოსწავლეებმა შექმნეს.',
  },
  {
    id: 2,
    content:
      'პროექტის განსაკუთრებულობა იმაში მდგომარეობს, რომ მოსწავლეებმა ფოტოების გენერირებისთვის გამოიყენეს ხელოვნური ინტელექტი. მათ შეიმუშავეს დეტალური ტექსტური აღწერები თითოეული სასურველი სცენისთვის, რის საფუძველზეც ხელოვნურმა ინტელექტმა შექმნა შთამბეჭდავი ვიზუალიზაციები.',
  },
  {
    id: 3,
    content:
      'ამ ინოვაციური მიდგომის ფარგლებში, გორის მეორე საჯარო სკოლის მოსწავლეებმა გაიარეს რამდენიმე საინტერესო ლექცია ხელოვნური ინტელექტის გამოყენების შესახებ. ტრენინგები ჩაატარა ილიას სახელმწიფო უნივერსიტეტის კიბერლაბორატორია „უნილაბის“ დირექტორმა, ბატონმა სანდრო ასათიანმა, რომელმაც მათ თანამედროვე ტექნოლოგიების შესაძლებლობები გააცნო.',
  },
  {
    id: 4,
    content:
      'ეს პროექტი ნათელი მაგალითია იმისა, თუ როგორ შეიძლება განათლებაში ტექნოლოგიების ინტეგრაციამ ხელი შეუწყოს შემოქმედებით აზროვნებასა და ახალი უნარების განვითარებას. ვიმედოვნებთ, რომ ეს ნამუშევრები გაამდიდრებს თქვენს გამოცდილებას „ვეფხისტყაოსნის“ სამყაროში მოგზაურობისას.',
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
