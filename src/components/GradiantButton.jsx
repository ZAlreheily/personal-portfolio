import React from 'react'

const GradiantButton = ({ children, classes = '', href = '' }) => {

  return (
    <a className={`gradient-button ${classes}`} href={href}>
      {children}
    </a>
  )
}

export default GradiantButton