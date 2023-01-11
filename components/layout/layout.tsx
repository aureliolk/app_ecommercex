import React from 'react'
import { Menu } from '../sections/menu';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div >
      <Menu />
      {children}
    </div>
  )
}

export default Layout;
