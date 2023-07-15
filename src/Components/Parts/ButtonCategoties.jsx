import React from 'react';

const ButtonCategories = ({ button, filter }) => {
  return (
    <div className="buttoncategories">
      {button.map((cat, i) => {
        return (
          <button
            type="button"
            onClick={() => filter(cat)}
            className="btn"
            key={i}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonCategories;
