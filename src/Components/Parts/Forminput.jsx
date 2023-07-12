import React from 'react';

const Forminput = ({ placeholder , setUsername }) => {
  return (
    <div className="forminput">
      {/* <label htmlFor="">{placeholder}</label> */}
      <input placeholder={placeholder} onChange={e=>{setUsername(e.target.value)}} />
    </div>
  );
};

export default Forminput;
