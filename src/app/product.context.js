'use client';

import { createContext } from 'react';

import products from './product-fixtures.json';

const searchBySku = (searchSku) => {
  return products?.find(({ sku }) => searchSku === sku);
}

export const ProductContext = createContext({ products: [{}], searchBySku });

export const ProductContextProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products, searchBySku }}>
			{children}
		</ProductContext.Provider>
  );
};
