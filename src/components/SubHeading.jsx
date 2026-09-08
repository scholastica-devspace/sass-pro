import React from 'react'

const SubHeading = ({className, text}) => {
  return (
    <p className={`font-roboto font-normal text-base text-white leading-7 ${className}`} >{text}</p>
  )
}

export default SubHeading