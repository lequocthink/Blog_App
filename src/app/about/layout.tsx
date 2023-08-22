import React, { ReactNode } from 'react'

export const metadata = {
    title: "About",
    description: "This is the about page",
  };

const Layout = ({children} : { children: ReactNode;} ) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout