import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <h1>Hello me nav</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/folders">Folders</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
          </li>
        </ul>
      </nav>
    )
}

