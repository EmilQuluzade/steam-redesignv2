import React from 'react'

const ButtonCategoties = ( {button, filter}) => {
  return (
    <div className="buttoncategories">
        {
                button.map((cat, i)=>{
                    return <button type="button" onClick={()=> filter(cat)} className="btn">{cat}</button>
                })
            }
    </div>
  )
}

export default ButtonCategoties