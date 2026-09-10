import React from 'react'

const Heading = ({calssName, text}) => {
  return (
    <h5 className={`font-raleway font-bold text-4xl text-heading ${calssName}`}>{text}</h5>
  )
}

export default Heading