import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav-bar'>
      <ul><Link className="nav-item"  to="/">Home</Link></ul>
      <ul><Link  className="nav-item" to="/about">About</Link></ul>
      <ul><Link className="nav-item"  to="/postpreview">Blog</Link></ul>
      <ul><Link className="nav-item"  to="/contact">Contact</Link></ul>
    </div>
  )
}


