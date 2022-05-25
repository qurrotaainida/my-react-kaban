import React from 'react'
import Avatar from './Avatar'
import Header from './Header'
import TagList from './TagList'
import styleCard from './card.module.css'

const Card = ({ children }) => {
  return (
      <div className={styleCard.cardContainer}>
        <Header />
        <div className={styleCard.cardChildren}>
          {children}
        </div>
        <TagList />
        <Avatar />
      </div>
  )
}

export default Card