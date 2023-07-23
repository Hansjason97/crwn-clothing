import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function MenuItem({title, imageUrl, size, linkUrl}) {

  let isLarge = ''
  if(size != null) isLarge = 'h-[480px]'
  const navigate = useNavigate();
  const newLink = useLocation().pathname+linkUrl;

  return (
    <div className={`group menu-item ${isLarge}`} onClick={()=> navigate(newLink)} >
      <div className='background-image' 
      style={{backgroundImage: `url(${imageUrl})`}}/>
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
    </div>
  )
}

export default MenuItem