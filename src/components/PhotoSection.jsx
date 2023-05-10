import React from 'react'
import GradientCard from './GradientCard'

const PhotoSection = () => {
  return (
    <GradientCard classes='image-card hover-effect flex'>
        <img src="/ziad-photo.jpg" alt="ziad" className='image' />
    </GradientCard>
  )
}

export default PhotoSection