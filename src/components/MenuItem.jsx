import React from 'react'

function MenuItem({title, imageUrl, size}) {

  let isLarge = ''
  if(size != null) isLarge = 'h-[480px]'

  return (
    <div className={`group menu-item ${isLarge}`} >
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