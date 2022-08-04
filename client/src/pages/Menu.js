import React from "react";
import DrinkList from "../components/DrinkList";
import CategoryMenu from "../components/CategoryMenu";



const Menu = () => {
  return (  
    <div className="container">
      <CategoryMenu />
      <DrinkList />
      
      </div>  
  );
};

export default Menu;
