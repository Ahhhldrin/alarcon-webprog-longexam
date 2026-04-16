import product1 from './img/1.png';
import product2 from './img/2.png';
import product3 from './img/3.png';
import product4 from './img/4.png';
import product5 from './img/5.png';
import product6 from './img/6.png';
import product7 from './img/7.png';
import product8 from './img/8.png';

const products = [
  {
    name: 'detroit-jacket',
    title: 'OG Detroit Jacket',
    image: product1,
    category: 'Jackets',
    price: 'PHP 15000',
    stock: 'In stock',
    content: [
      'The OG Detroit Jacket is made in our original loose fit from heavyweight cotton denim, featuring a poplin lining in the body and nylon-lined sleeves.',
      'A front zip, two welt pockets, and a zipped chest pocket offer functional touches. A woven Square Label completes the design.',
    ],
  },
  {
    name: 'active-jacket',
    title: 'OG Active Jacket',
    image: product2,
    category: 'Jackets',
    price: 'PHP 4000',
    stock: 'In stock',
    content: [
      'The OG Active Jacket is made in our original loose fit from heavyweight Dearborn Canvas.',
      'The item also has a poplin-lined body and nylon-lined sleeves. Rib-knit trims create a cinching effect while also offering additional insulation.',
      'A kangaroo pocket, inside chest pocket, and triple stitching provide functional details. A woven Square Label on the front completes the design.',
    ],
  },
  {
    name: 'brandon-pant',
    title: 'Brandon Pant',
    image: product3,
    category: 'Pants',
    price: 'PHP 6000',
    stock: 'In stock',
    content: [
      'The Brandon Pant is five-pocket style made from a heavyweight cotton denim in a loose straight fit.' ,
      'The item also features bartack stitching and rivets at vital stress points for added durability.',
     ' A woven Square Label appears on the back pocket.',
    ],
  },
  {
    name: 'warmup-jacket',
    title: 'F.C.Real Bristol x Carhartt WIP Warm Up Jacket',
    image: product4,
    category: 'Jackets',
    price: 'PHP 899',
    stock: 'In stock',
    content: [

      'Tokyo-based label F.C.Real Bristol and Carhartt WIP have collaborated on a capsule collection designed for wear on and off the pitch,',
      'based on the concept of a fictional football club. The Warm Up Jacket is a hooded style made from lightweight, mesh-lined nylon satin, ',
      'featuring allover tonal shadow stripes. The jacket has contrast-color sleeves, detailed with co-branded jacquard webbing at the shoulders.',
       'Two zipped welt pockets and a two-way zip fastening appear on the front. A Carhartt WIP Square Label and F.C.R.B logo complete the design.',

    ],
  },
  {
    name: 'postal-jacket',
    title: 'Postal Jacket',
    image: product5,
    category: 'Jackets',
    price: 'PHP 2000',
    stock: 'Preorder',
    content: [
        'The Postal Jacket is made from an unlined, midweight polycotton fabric. The item features a two-way zip and a zipped chest pocket.', 
        'Two welt pockets appear on the front. A woven Square Label completes the design.',
    ],
  },
  {
    name: 'overall',
    title: 'Women Bib Overall Straight',
    image: product6,
    category: 'overall',
    price: 'PHP 8500',
    stock: 'Low stock',
    content: [
        'The Womens Bib Overall Straight is made of midweight cotton canvas. The item comes in a rinsed version for a softer feel without compromising on durability, and an aged canvas iteration, which offers a lightly worn-in finish.',
        'A work-inspired style, the item also features metal rivets, multiple pockets throughout, and adjustable straps. A woven Square Label appears on the chest pocket.',
    ],
  },
  {
    name: 'craft-shirt',
    title: 'S/S Craft Shirt',
    image: product7,
    category: 'Shirt',
    price: 'PHP 5000',
    stock: 'In stock',
    content: [
      'The S/S Craft Shirt is made from lightweight polycotton twill and features a back pleat, accentuating the item\'s loose fit.', 
      'The shirt also has two chest pockets with a flap and button closure.', 
      'A woven Square Label, detailed with a Script Logo, appears on the left chest pocket.',
    ],
  },
  {
    name: 'langdon-short',
    title: 'Langdon Short',
    image: product8,
    category: 'Short',
    price: 'PHP 6500',
    stock: 'In stock',
    content: [
      'The Langdon Short is made from heavyweight cotton denim in a loose fit. The item has a back yoke and is detailed with bartack stitching at vital stress points.',
      'A woven Square Label completes the design.',
    ],
  },
];

export default products;
