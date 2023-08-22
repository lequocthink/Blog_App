import React, { ReactNode } from 'react'

export const metadata = {
    title: "Dashboard",
    description: "This is the Dashboard page",
  };

const Layout = ({children} : { children: ReactNode;} ) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout