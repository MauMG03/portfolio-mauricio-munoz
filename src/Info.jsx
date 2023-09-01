import React from 'react'
import "./styles.css"

const Info = ({name,bio}) => {
  return (
    <div>
        <h2>{name}</h2>
        <span>{bio}</span>
    </div>
  )
}

export default Info