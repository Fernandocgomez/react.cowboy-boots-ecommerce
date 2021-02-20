// Modules
import React, { useEffect } from 'react'
import ReactStarts from 'react-rating-stars-component';

const CollectionItem = ({collectionItem}) => {

  if(!collectionItem) {
    return null;
  }

  return (
      <div className="col-md-4 pb-4">
        <div className="d-flex flex-column align-items-center">
          <img
            src={collectionItem.imgSrc}
            alt=""
            className="img-fluid pb-3"
          />
          <ReactStarts value={collectionItem.reviewRate} className={"pb-2"} edit={false} size={20}/>
          <h4 className="h4">{collectionItem.title}</h4>
          <p>{collectionItem.price}</p>
        </div>
      </div>
    )
}

export default CollectionItem
