import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/' legacyBehavior><a>Home</a></Link>
          <Link href='/about' legacyBehavior><a>About</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar