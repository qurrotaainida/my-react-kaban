import React from 'react'
import Image from 'next/image'
import AvatarImage from '../../public/images/avatar-default.png'
import styleCard from './card.module.css'

const Avatar = () => {
  return (
    <div className={styleCard.avatarContainer} >
      <Image className={styleCard.avatarImageContainer} alt={AvatarImage} src={AvatarImage} width={40} height={40}/>
    </div>
  )
}

export default Avatar