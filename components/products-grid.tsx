'use client'

import { motion } from 'framer-motion'
import { ProductCard } from './product-card'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { ProductList } from './product-list';
// const iphone13 = require("./iphone13.png");
// const macbook = require("./macbookm1.png");
// const samsungs21 = require("./samsungs21.png");


export function ProductsGrid() {
  let [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
   const fetchProducts = async() => {
        const productsList = await axios.get('http://localhost:4000/products');
        setProducts(productsList.data.products);
        setLoading(false);
    }
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {!loading && products.map((product, index) => (
        <motion.div
          key={product._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProductCard {...product} />
        </motion.div>
      ))}
    </div>
  )
}

