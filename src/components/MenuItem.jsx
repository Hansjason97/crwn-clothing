import React from 'react'

function MenuItem({title, imageUrl, size}) {

  let isLarge = 'h-[240px]'
  if(size != null) isLarge = 'h-[480px]'

  return (
    <div className={`menu-item ${isLarge} `} 
    style={{backgroundImage: `url(${imageUrl})`}}>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
  )
}

export default MenuItem