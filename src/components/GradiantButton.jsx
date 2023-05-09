import React from 'react'

const GradiantButton = ({ children, classes='', href='' }) => {
  function redirect(){
    window.location.href = href;
  }
  return (
    <div className={`gradient-button ${classes}`} onClick={redirect}>
      {children}
    </div>
  )
}

export default GradiantButton