import {useRef} from 'react'
import './Button.css'


const Button = ({btnname}) => {
  return (
    <div className="mybtn">{btnname}</div>
  )
}

export default Button