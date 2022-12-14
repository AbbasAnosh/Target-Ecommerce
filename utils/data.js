import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "john@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Joe",
      email: "joe@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Antony Trivet",
      slug: "antony-trivet",
      category: "Shirts",
      image: "/images/antony-trivet.jpg",
      price: 60.65,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 18,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...",
    },
    {
      name: "Godisable Jacob",
      slug: "godisable-jacob",
      category: "Shirts",
      image: "/images/godisable-jacob.jpg",
      price: 80.64,
      brand: "Adidas",
      rating: 5.2,
      numReviews: 10,
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...",
    },
    {
      name: "Pexels Antony Trivet",
      slug: "pexels-antony-trivet",
      category: "Shirts",
      image: "/images/pexels-antony-trivet.jpg",
      price: 90.45,
      brand: "Puma",
      rating: 4.5,
      numReviews: 3,
      countInStock: 16,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...",
    },
    {
      name: "Godisable Jacob",
      slug: "pexels-godisable-jacob",
      category: "Pants",
      image: "/images/pexels-godisable-jacob.jpg",
      price: 40.67,
      brand: "Oliver",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...",
    },
    {
      name: "pixabay Pants",
      slug: "pixabay-pants",
      category: "Pants",
      image: "/images/pixabay.jpg",
      price: 85.67,
      brand: "Zara",
      rating: 3.5,
      numReviews: 7,
      countInStock: 30,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...",
    },
    {
      name: "Wesley Rocha",
      slug: "wesley-rocha",
      category: "Shirts",
      image: "/images/wesley-rocha.jpg",
      price: 75,
      brand: "Casely",
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...",
    },
    {
      name: "Pexels Gustavo Ac",
      slug: "pexels-gustavo-ac",
      category: "Pants",
      image: "/images/pexels-gustavo-ac.jpg",
      price: 90.54,
      brand: "Oliver",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...",
    },
    {
      name: "Pexels Men-Shirt",
      slug: "pexels-men-shirt",
      category: "Shirts",
      image: "/images/pexels-????????????-????????????.jpg",
      price: 70.67,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...",
    },
  ],
};

export default data;
