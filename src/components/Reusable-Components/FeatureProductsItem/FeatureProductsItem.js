// Modules
import React from 'react'

const FeatureProductsItem = (props) => {
    const { featureProductItem } = props;
    if(!featureProductItem) {
        return null;
    }
    return (
        <div className="col-md-4 pb-4">
          <img
            src={featureProductItem.imgSrc}
            alt=""
            className="img-fluid pb-3"
          />
          <h4 className="h4">{featureProductItem.title}</h4>
          <p>{featureProductItem.price}</p>
        </div>
    )
}

export default FeatureProductsItem
