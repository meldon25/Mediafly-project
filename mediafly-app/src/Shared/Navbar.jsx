import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/Navbar.css'

export default function Navbar() {
    return (     
        <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/folder/1">Learn What You Can Do in My SalesKit</NavLink>
          </li>
          <li>
            <NavLink to="/folder/2">About Mediafly</NavLink>
          </li>
          <li>
            <NavLink to="/folder/3">Examples Customer Apps</NavLink>
          </li>
          <li>
            <NavLink to="/folder/4">Case Studies and Other Shareable Content</NavLink>
          </li>
          <li>
            <NavLink to="folder/5">Interactive Content</NavLink>
          </li>
          <li>
            <NavLink to="/folder/6">Archive</NavLink>
          </li>
        </ul>
      </nav>
    )
}

