import Product from "../models/productModel.js";
import { cities } from "./cities.js";
import { places, descriptors } from "./helpers.js";

const sample = (array) => array[Math.floor(Math.random() * array.length)];

export const seedDb = async () => {
  await Product.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const rendom1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20 + 10);
    const product = new Product({
      name: `${cities[rendom1000].city} , ${cities[rendom1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      price: price,
      countInStock: price,
      brand: "Nike",
      image: "https://source.unsplash.com/collection/354062",
      discription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      category: "shoes",
    });
    await product.save();
    console.log("updated Data Base");
  }
};
