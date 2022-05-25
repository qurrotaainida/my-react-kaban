import React from 'react'
import styleCard from './card.module.css'

const Header = () => {
  return (
    <div className={styleCard.headerContainer}>
      <div className={styleCard.headerTitle}>
        Not Started
      </div>
      <div className={styleCard.headerExpires}>
        Expire on 24th jun
      </div>
    </div>
  )
}

export default Header