import React, { ReactNode } from 'react'

export const metadata = {
    title: "Blog",
    description: "This is the Blog page",
  };

const Layout = ({children} : { children: ReactNode;} ) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout