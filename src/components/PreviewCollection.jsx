import React from 'react'
import CollectionItem from './CollectionItem'

function PreviewCollection({title, items}) {
  return (
    <div className='previewCollection'>
        <h1 className='previewTitle'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,idx)=> idx < 4)
                .map(({id, ...props})=>(
                    <CollectionItem key={id} {...props}/>
                ))
            }
        </div>
    </div>
  )
}

export default PreviewCollection