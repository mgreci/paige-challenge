'use client';

import { createContext } from 'react';

import products from './product-fixtures.json';

export const ProductContext = createContext({ products: [{}] });

// export const findProductBySku = (searchSku) => {
//   return products?.find(({ sku }) => searchSku === sku);
// }

export const ProductContextProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
  );
};
