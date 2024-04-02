import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import Category from './Category/category';
import Price from './Price/price';
import Colors from './Colors/colors';
import"./Sidebar.css";
export const Sidebar = ({handleChange}) => {
  return(
  <>
  <section className="sidebar"></section>
  <div className="logo-container">
    <h1><GiShoppingCart /></h1>
  </div>
<Category handleChange={handleChange}/>
<Price handleChange={handleChange}/>
<Colors handleChange={handleChange}/>
  
  </>
  )
}
