import React from 'react'

export default ({ children = 'Copy Missing!', className = '', href = 'https://petstays.io/no-button-copy' }) => {
  return (
    <a href={href} className={`button ${className}`}>
      {children}
    </a>
  )
}