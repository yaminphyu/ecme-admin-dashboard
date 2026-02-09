import React from 'react'

export default function AuthSideImage() {
  return (
    <div className='py-6 px-10 lg:flex flex-col flex-1 justify-between hidden rounded-3xl items-end relative max-w-130 2xl:max-w-180'>
      <img
        alt='auth-bg-image'
        className='absolute h-full w-full top-0 left-0 rounded-3xl'
        src='/images/auth/auth-side-bg.png'
      />
    </div>
  );
}
