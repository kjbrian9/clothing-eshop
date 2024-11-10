const Products = [
  {
    id: 1,
    name: "White tshirt",
    image: "/images/productTabImage1.jpeg",
    price: "100",
    description:
      "A wardrobe essential crafted from 100% organic cotton. Soft, breathable, and perfect for any occasion, this classic white T-shirt features a relaxed fit and crew neckline.",
    type: "Men",
    sizes: ["XS", "S", "M"],
    color: "White",
  },
  {
    id: 2,
    name: "Trench coat",
    image: "/images/productTabImage2.jpeg",
    price: "150",
    description:
      "A sleek black trench coat for versatile, all-season style. With a tailored fit and sophisticated design, it's perfect for layering over your casual or formal outfits.",
    type: "Men",
    sizes: ["XS", "S", "M", "XXL"],
    color: "Black",
  },
  {
    id: 3,
    name: "Yellow Hodiee",
    image: "/images/productTabImage3.webp",
    price: "150",
    description:
      "Brighten up your look with this vibrant yellow hoodie. Soft and cozy, with a classic fit, it’s perfect for lounging or adding a pop of color to your everyday style.",
    type: "Men",
    sizes: ["XS", "S", "M"],
    color: "Yellow",
  },
  {
    id: 4,
    name: "Denim jacket",
    image: "/images/productTabImage4.webp",
    price: "150",
    description:
      "A timeless blue denim jacket that never goes out of style. With a comfortable fit and classic design, it's a versatile piece that can be worn year-round.",
    type: "Men",
    sizes: ["S", "M"],
    color: "Blue",
  },
  {
    id: 5,
    name: "Red leather jacket",
    image: "/images/productTabImage5.webp",
    price: "150",
    description:
      "Stand out with this bold red leather jacket. Stylish and durable, it features a sleek fit that's perfect for elevating any casual outfit.",
    type: "Men",
    sizes: ["S", "M"],
    color: "Red",
  },
  {
    id: 6,
    name: "White sweater  ",
    image: "/images/productTabImage6.webp",
    price: "150",
    description:
      "A cozy, crisp white sweater made from soft fabric. A must-have for layering or wearing on its own, it offers both comfort and style.",
    type: "Men",
    sizes: ["XS", "S", "M"],
    color: "White",
  },
  {
    id: 7,
    name: "Oversize tshirt",
    image: "/images/productTabImage7.webp",
    price: "150",
    description:
      "This relaxed-fit oversized black T-shirt is perfect for creating a laid-back, comfortable look without compromising on style.",
    type: "Men",
    sizes: ["S"],
    color: "Black",
  },

  {
    id: 8,
    name: "Denim jeans",
    image: "/images/productTabImage8.jpeg",
    price: "150",
    description:
      "Classic blue denim jeans with a perfect balance of style and comfort. These jeans are a versatile addition to any casual wardrobe.",
    type: "Men",
    sizes: ["XS", "S", "M"],
    color: "Blue",
  },
  {
    id: 9,
    name: "Denim jacket",
    image: "/images/productTabImage9.webp",
    price: "150",
    description:
      "A classic blue denim jacket designed for a comfortable fit. It’s the perfect piece to layer for a timeless, rugged look.",
    type: "Men",
    sizes: ["XS", "S", "M"],
    color: "Blue",
  },
  {
    id: 10,
    name: "Red turtleneck",
    image: "/images/WomenProduct1.webp",
    price: "150",
    description:
      "DAdd a pop of color with this sleek red turtleneck. Soft and stylish, it’s a must-have for layering or wearing on its own.",
    type: "Women",
    sizes: ["XS", "S", "M", "XL", "XXL"],
    color: "Red",
  },
  {
    id: 11,
    name: "Red jacket",
    image: "/images/WomenProduct2.webp",
    price: "150",
    description:
      "A bold red jacket that’s perfect for every season. Its sleek design and versatile color make it an easy go-to for any casual outfit.",
    type: "Women",
    sizes: ["XS", "S", "M"],
    color: "Red",
  },
  {
    id: 12,
    name: "Black tshirt",
    image: "/images/WomenProduct3.webp",
    price: "150",
    description:
      "A classic black T-shirt with a comfortable fit. A versatile piece that can be dressed up or down for any occasion.",
    type: "Women",
    sizes: ["XS", "S", "M"],
    color: "Black",
  },
  {
    id: 13,
    name: "Denim shorts",
    image: "/images/WomenProduct4.webp",
    price: "150",
    description:
      "A stylish pair of blue denim shorts perfect for warm weather. Pair with a tee or tank top for a relaxed, casual look.",
    type: "Women",
    sizes: ["S", "M"],
    color: "Blue",
  },
  {
    id: 14,
    name: "Grey trousers",
    image: "/images/WomenProduct5.webp",
    price: "150",
    description:
      "Sophisticated grey trousers that offer both comfort and style. Ideal for dressing up or down, these trousers are a versatile wardrobe staple.",
    type: "Women",
    sizes: ["XS", "S", "M"],
    color: "Grey",
  },
  {
    id: 15,
    name: "Striped tshirt",
    image: "/images/WomenProduct6.webp",
    price: "150",
    description:
      "A fresh take on a classic striped T-shirt. Its clean, minimal design makes it perfect for both casual and semi-casual looks.",
    type: "Women",
    sizes: ["XS", "S", "M"],
    color: "White",
  },
  {
    id: 16,
    name: "Black jacket",
    image: "/images/WomenProduct7.webp",
    price: "150",
    description:
      "A versatile black jacket that can be dressed up or down. It’s the perfect addition to any wardrobe for cooler days.",
    type: "Women",
    sizes: ["XS", "S", "M"],
    color: "Black",
  },

  {
    id: 17,
    name: "White Hodiee",
    image: "/images/WomenProduct8.webp",
    price: "150",
    description:
      "A comfortable white hoodie that combines warmth with style. The perfect casual layering piece for all your relaxed outfits.",
    type: "Women",
    sizes: ["XS", "S"],
    color: "White",
  },
  {
    id: 18,
    name: "White jacket",
    image: "/images/WomenProduct9.webp",
    price: "150",
    description:
      "A fresh white jacket that offers style and versatility. Perfect for layering or as a standout piece in any casual outfit.",
    type: "Women",
    sizes: ["XS", "S", "M"],
    color: "White",
  },
  {
    id: 19,
    name: "Gold & Silver necklace",
    image: "/images/jewellery-picture.webp",
    price: "100",
    description:
      "A blend of gold and silver in a delicate necklace. Perfect for adding elegance to any outfit, it’s a timeless addition to your jewelry collection.",
    type: "Jewellery",
    sizes: ["XS", "S", "M"],
    material: "Silver",
  },
  {
    id: 20,
    name: "Silver necklace",
    image: "/images/jewellery-picture0.jpeg",
    price: "150",
    description:
      "A sleek and sophisticated silver necklace that pairs well with both casual and formal attire. A must-have for jewelry lovers.",
    type: "Jewellery",
    sizes: ["XS", "S", "M"],
    material: "Silver",
  },
  {
    id: 21,
    name: "Silver jewellery set",
    image: "/images/jewellery-picture1.webp",
    price: "80",
    description:
      "A stunning silver jewelry set, featuring a matching necklace, earrings, and bracelet. Perfect for a polished, coordinated look.",
    type: "Jewellery",
    sizes: ["XS", "S", "M"],
    material: "Silver",
  },
  {
    id: 22,
    name: "Silver bracelet",
    image: "/images/jewellery-picture2.webp",
    price: "300",
    description:
      "A beautifully crafted silver bracelet. A timeless accessory that can easily be worn alone or paired with other jewelry for a layered look",
    type: "Jewellery",
    sizes: ["XS", "S", "M"],
    material: "Silver",
  },
  {
    id: 23,
    name: "Brace jewellery  set",
    image: "/images/jewellery-picture3.webp",
    price: "58",
    description:
      "Elegant white gold bracelet set that adds a touch of luxury to any outfit. Ideal for special occasions or everyday wear.",
    type: "Jewellery",
    sizes: ["XS", "M"],
    material: "White gold",
  },
  {
    id: 24,
    name: "Silver Verj jewellery winter set",
    image: "Images/jewellery-picture4.webp",
    price: "150",
    description:
      "A luxurious silver jewelry set, perfect for the colder months. This set adds elegance and warmth to your winter wardrobe.",
    type: "Jewellery",
    sizes: ["XS", "S"],
  },
  {
    id: 25,
    name: "Ave Sunglasses",
    image: "/images/jewellery-picture5.webp",
    price: "299",
    description:
      "Trendy Ave sunglasses with a modern design. Ideal for protecting your eyes while adding a stylish touch to your outfits.",
    type: "Jewellery",
    sizes: ["XS", "S", "M"],
  },
  {
    id: 26,
    name: "White gold necklace",
    image: "/images/jewellery-picture6.webp",
    price: "1250",
    description:
      "A stunning white gold necklace that adds sophistication and elegance to any look. Ideal for both formal and casual wear",
    type: "Jewellery",
    sizes: ["XS", "S", "M"],

    material: "White gold",
  },

  {
    id: 27,
    name: "Golden face jewellery",
    image: "/images/jewellery-picture8.jpeg",
    price: "580",
    description:
      "A unique golden face jewelry piece designed to make a statement. Perfect for those who want to add an artistic touch to their accessories collection.",
    type: "Jewellery",
    sizes: ["XS", "S"],
    material: "Gold",
  },

  // Add more products here
];

export { Products };
