'use client'

import { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  title: string
  onClose: () => void
  children: ReactNode
  size?: 'md' | 'lg' | 'xl'
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md'
}: ModalProps) {

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleBackdropClick}>

      <div className="relative w-full max-w-lg">
        <div className="relative bg-white rounded-lg shadow-lg">
          <div className="p-6 relative">
            <h2 className="text-lg font-semibold mb-4">{title}</h2>
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
              <p className="text-lg p-2">❌</p>
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}