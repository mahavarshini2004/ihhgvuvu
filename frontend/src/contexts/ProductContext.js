import React, { createContext, useState, useContext } from 'react';


const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Milk', image: 'https://milkandhoneyranch.com/wp-content/uploads/2023/06/jiggi21_a_beautiful_cow_close_up_with_a_glass_of_milk_on_a_tabl_38f92050-d3d4-488d-a9d0-ed861899b379-e1687377584795.png', price: '$2.50' },
    { id: 2, name: 'Cheese', image: 'https://tse4.mm.bing.net/th?id=OIP.jpCmKfnMMt7ks8Ejm-SmMwHaHa&pid=Api&P=0&h=220', price: '$3.00' },
    { id: 3, name: 'Butter', image: 'https://tse1.mm.bing.net/th?id=OIP.9Q-rXQvUUL7OXM22xubQ5QHaE7&pid=Api&P=0&h=220', price: '$2.75' },
    { id: 4, name: 'Curd', image: 'https://tse4.mm.bing.net/th?id=OIP.bJJBcl5Av60XwwuZXj-j3AHaHa&pid=Api&P=0&h=220', price: '$2.00' },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};


export const useProducts = () => useContext(ProductContext);
