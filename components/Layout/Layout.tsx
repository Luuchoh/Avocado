import React from 'react'
import Navbar from '@components/Navbar/Navbar'

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      { children }
      <footer className='container'>This is the footer</footer>
      <style jsx> {`
        .container {
          background-color: salmon;
        }      
      `}
      </style>
    </div>
  )
}

export default Layout