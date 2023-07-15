import React from 'react';

const MenuCategories = ({ menuItem }) => {
  return (
    <div className="menucategories">
      {menuItem.map((item) => {
        return (
          <div className="item-con" key={item.id}>
            <div className="item-container">
              <div className="item-box">
                <img src={item.thumbnail} alt="" className="item-image" />
                <div className="item-content">
                  <h2>{item.title}</h2>
                  <p>{item.short_description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCategories;
