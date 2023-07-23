import React from 'react'

function CollectionItem({id, name, price, imageUrl}) {
  return (
    <div className='collectionItem'>
        <div
        className='collectionImage'
        style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='collectionFooter'>
            <span className='collectionName'>{name}</span>
            <span className='collectionPrice'>{price}</span>
        </div>
    </div>
  )
}

export default CollectionItem