import React from 'react'
import Button from '../UIComponents/Button'

const AuthText = ({
  label,
  text,
  url
}: {
  label: string;
  text: string;
  url: string;
}) => {
  return (
    <p className="text-sm text-center text-gray-500 mt-6">
      {label}{' '}
      <a href={url} className="text-blue-600 font-medium">
        {text}
      </a>
    </p>
  );
};

export default function SocialLogin({
  isLoginPage = false
}: {
  isLoginPage?: boolean
}) {
  if (!isLoginPage) {
    return (
      <AuthText
        label='Already have an account?'
        text='Sign in'
        url='/login'
      />
    );
  }

  return (
    <>
      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="px-3 text-sm text-gray-500">
          or continue with
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="flex gap-4">
        <Button
          label='Google'
          handleOnClick={() => {}}
          imageUrl='/images/auth/google.png'
        />
        <Button
          label='Github'
          handleOnClick={() => {}}
          imageUrl='/images/auth/github.png'
        />
      </div>

      <AuthText
        label='Don&apos;t have an account?'
        text='Sign up'
        url='/signup'
      />
    </>
  )
}
