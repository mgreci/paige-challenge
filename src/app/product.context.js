'use client';

import { createContext, useState } from 'react';

// NOTE: possible typo in that there are two objects with the same id value.
import allProducts from './product-fixtures.json';

export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(allProducts);

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

  const filter = (color) => {
    let filteredProducts;
    if (!color || color === '') {
      filteredProducts = [...allProducts];
    } else {
      filteredProducts = allProducts?.filter((product) => product.color === color);
    }
    setProducts(filteredProducts)
  }

  return (
    <ProductContext.Provider value={{ products, searchBySku, update, filter }}>
			{children}
		</ProductContext.Provider>
  );
};
