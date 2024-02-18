import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const NavBar=()=>{

    return (
      <div>
   <nav className="navbar fixed-top navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#" style={{color:"white", fontFamily:'serif',fontWeight:'500', fontSize:'1.5rem'}}>IB News</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{background:'white'}}
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="#" style={{color:"white"}}>Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="business" style={{color:"#A9A9A9"}}>Business</Link> </li>
        <li className="nav-item"><Link className="nav-link" to="entertainment" style={{color:"#A9A9A9"}}>Entertainment</Link> </li>
        <li className="nav-item"><Link className="nav-link" to="general" style={{color:"#A9A9A9"}}>General</Link> </li>
        <li className="nav-item"><Link className="nav-link" to="health" style={{color:"#A9A9A9"}}>Health</Link> </li>
        <li className="nav-item"><Link className="nav-link" to="science" style={{color:"#A9A9A9"}}>Science</Link> </li>
        <li className="nav-item"><Link className="nav-link" to="sports" style={{color:"#A9A9A9"}}>Sports</Link> </li>
        <li className="nav-item"><Link className="nav-link" to="technology" style={{color:"#A9A9A9"}}>Technology</Link> </li>
        
      </ul>
      
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-light" type="submit">
          Search
        </button>
      </form> */}

    </div>
  </div>
</nav>

      </div>
    )
  }

export default NavBar
