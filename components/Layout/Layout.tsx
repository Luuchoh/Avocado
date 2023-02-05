import React from 'react'
import { Container } from 'semantic-ui-react';

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container as="main" text>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout