import React from 'react'
import { NavLink } from 'react-router-dom'

// Cú pháp mới để tạo component: rafce

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">    
          {/* Modify here */}
  <div className="container">
    <NavLink className="navbar-brand" to="/">Portfolio</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">                         
        {/* Sửa thành ms-auto để chữ portfolio và phần còn lại tách xa nhau 
            ms: margin-start
        */}
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header