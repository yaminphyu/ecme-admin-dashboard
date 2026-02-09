import React, { ReactNode } from 'react'

interface LayoutInterface {
  children: ReactNode
}

export default function Layout({
  children
}: LayoutInterface) {
  return (
    <div className='w-full h-auto bg-white'>
      {children}
    </div>
  )
}
