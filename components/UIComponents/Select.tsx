import React, { ReactNode, RefObject, useEffect } from 'react'

type SelectProps = {
  children: ReactNode;
  isToggle: boolean;
  cusRef: RefObject<HTMLDivElement | null>;
  cusCss?: string;
  onClose: () => void;
}

export default function Select({
  children,
  isToggle,
  cusRef,
  cusCss,
  onClose
}: SelectProps) {

  useEffect(() => {
    if (!isToggle) return;
  
    const handleClickOutside = (event: MouseEvent) => {
      if (!cusRef.current) return;
  
      if (!cusRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isToggle, onClose]);
  
  return (
    <div
      ref={cusRef}
      className={`h-auto absolute rounded-md p-3 shadow-2xl ${cusCss}`}
    >
      {children}
    </div>
  )
}
