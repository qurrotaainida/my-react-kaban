import React from 'react'
import styleCard from './card.module.css'

const Tag = ({ children }) => {
  return (
    <div className={styleCard.tags}>
      {children}
    </div>
  )
}

export default Tag