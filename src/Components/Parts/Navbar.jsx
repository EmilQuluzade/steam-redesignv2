import { useRef } from 'react'
import '../../App.css'
import steamlogo from '../Images/Steamlogo.png'
import Button from './Button'


const Navbar = () => {
  return (
    <div className="mynavbar">
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <img src={steamlogo} alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link text-white" href="#">Store</a>
        </li>
      <li class="nav-item">
          <a class="nav-link text-white" href="#">Categories</a>
        </li>
      <li class="nav-item">
          <a class="nav-link text-white" href="#">Community</a>
        </li>
      <li class="nav-item">
          <a class="nav-link text-white" href="#">About</a>
        </li>
      </ul>
      <Button btnname='Install Steam' />
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <Button btnname='Log In' />
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar