'use client';

import { createContext } from 'react';

import products from './product-fixtures.json';
// NOTE: possible typo in that there are two objects with the same id value.

const searchBySku = (searchSku) => {
  return products?.find(({ sku }) => searchSku === sku);
}

const update = (productId, newProduct) => {
  // validate newProduct?

  // find index
  const index = products?.findIndex(({ id }) => id === productId);

  // if index exists, update
  if (index > -1) {
    products.splice(index, 1, newProduct);
  }
};

export const ProductContext = createContext({ products: [{}], searchBySku, update });

export const ProductContextProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products, searchBySku, update }}>
			{children}
		</ProductContext.Provider>
  );
};
