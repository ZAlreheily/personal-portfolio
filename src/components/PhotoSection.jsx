import React from 'react'
import GradientCard from './GradientCard'

const PhotoSection = () => {
  return (
    <GradientCard classes='image-card hover-effect flex'>
        <img src="/ziad-photo.webp" alt="ziad alreheily" className='image' />
    </GradientCard>
  )
}

export default PhotoSection