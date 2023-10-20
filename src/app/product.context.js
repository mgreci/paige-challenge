'use client';

import { createContext, useState } from 'react';

// NOTE: possible typo in that there are two objects with the same id value.
import allProducts from './product-fixtures.json';

export const ProductContext = createContext({
  products: [],
  colorOptions: [],
  searchBySku: () => {},
  update: () => {},
  filter: () => {}
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(allProducts);
  const colorOptions = [];

  const searchBySku = (searchSku) => {
    return products?.find(({ sku }) => searchSku === sku);
  }

  const update = (productId, newProduct) => {
    // validate newProduct?
  
    // find index
    const index = products?.findIndex(({ id }) => id === productId);
  
    // if index exists, update
    if (index > -1) {
      const modifiedProduct = [...products];
      modifiedProduct[index] = newProduct;
      setProducts(modifiedProduct);
    }
  };

  const filter = (colors) => {
    let filteredProducts;
    if (!Array.isArray(colors) || colors.length === 0) {
      filteredProducts = [...allProducts];
    } else {
      filteredProducts = allProducts?.filter((product) => colors.includes(product.color));
    }
    setProducts(filteredProducts)
  }

  return (
    <ProductContext.Provider value={{ products, colorOptions, searchBySku, update, filter }}>
			{children}
		</ProductContext.Provider>
  );
};
