import React from 'react'
import Sidebar from '@/components/sidebar'


type Props = { children: React.ReactNode }

const Layout = (promps: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        {promps.children}
      </div>
    </div>
  )
}

export default Layout