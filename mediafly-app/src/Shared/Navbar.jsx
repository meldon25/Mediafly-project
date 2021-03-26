import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (     
        <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/folder/:folderId">Folders</NavLink>
          </li>
          <li>
            <NavLink to="folder/:folderId/item/:itemId">Items</NavLink>
          </li>
        </ul>
      </nav>
    )
}

