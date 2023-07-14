import React from 'react';

const MenuCategories = ({ menuItem }) => {
  return (
    <div className="menucategories">
      {menuItem.map((item) => {
        return (
          <div className="item-con" key={item.id}>
            <div className="item-container">
              <img src={item.thumbnail} alt="" />
              <h2>{item.title}</h2>
              <p>{item.short_description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCategories;