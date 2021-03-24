import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <h1>Hello it me nav</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/folder/`${:folderId}`">Folders</Link>
          </li>
          <li>
            <Link to="/item/`${:itemId}`">Items</Link>
          </li>
        </ul>
      </nav>
    )
}

