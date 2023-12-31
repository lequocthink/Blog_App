import React, { ReactNode } from 'react'
import styles from './page.module.css'

export const metadata = {
  title: "Portfolio",
  description: "This is the Portfolio page",
};

const Layout = ({children} : { children: ReactNode;} ) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout