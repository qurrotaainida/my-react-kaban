import React from 'react'
import Tag from './Tag'
import styleCard from './card.module.css'

const TagList = () => {
  return (
    <div className={styleCard.tagContainer}>
        <Tag>Website</Tag>
        <Tag>UX</Tag>
        <Tag>UI</Tag>
        <Tag>Wireframe</Tag>
    </div>
  )
}

export default TagList