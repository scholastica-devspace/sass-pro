import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`font-raleway font-semibold text-base bg-accent text-white 
      py-5 px-12 border-2 border-transparent rounded-md
      transition-all duration-300 ease-in-out
      hover:bg-white hover:text-accent hover:border-accent ${className}`}>{text}</button>
  )
}

export default Button