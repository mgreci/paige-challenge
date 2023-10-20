'use client';

import { createContext, useState } from 'react';

// NOTE: possible typo in that there are two objects with the same id value.
import allProducts from '@/product-fixtures.json';
import { removeDuplicates } from '@/util';
import { IProduct } from './product.interface';

type ProductContextType = {
  products: IProduct[];
  colorOptions: string[];
  searchBySku: (sku: string) => void;
  update: (id: string, newProduct: IProduct) => void;
  filter: (colors: string[]) => void;
};

let colorOptions: string[] = [];
allProducts.forEach(({ color }) => colorOptions.push(color));
colorOptions = removeDuplicates(colorOptions);

export const ProductContext = createContext<ProductContextType>({
  products: [],
  colorOptions: [],
  searchBySku: () => {},
  update: () => {},
  filter: () => {}
});

export const ProductContextProvider = ({ children }: { children: any }) => {
  const [products, setProducts] = useState<IProduct[]>(allProducts);

  const searchBySku = (searchSku: string) => {
    return products?.find(({ sku }) => searchSku === sku);
  }

  const update = (productId: string, newProduct: IProduct) => {
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

  const filter = (colors: string[]) => {
    let filteredProducts;
    if (!Array.isArray(colors) || colors.length === 0) {
      filteredProducts = [...allProducts];
    } else {
      filteredProducts = allProducts?.filter((product) => colors.includes(product.color));
    }
    setProducts(filteredProducts)
  }

  return <ProductContext.Provider value={{ products, colorOptions, searchBySku, update, filter }}>{children}</ProductContext.Provider>
};
