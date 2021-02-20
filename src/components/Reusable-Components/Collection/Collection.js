// Modules
import React from "react";
// Components
import CollectionItem from "../CollectionItem/CollectionItem";

const Collection = ({collectionTitle}) => {
  const collectionItem = {
    imgSrc: "https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw6f6c491c/images/zoom/10002227_3-4_front.jpg?sw=800&sh=800",
    title: "Product title",
    price: "$209.00",
    reviewRate: 4.2
  }
  return (
    <section className="container text-center text-capitalize pt-4 pb-4">
      <div className="row pb-4">
        <div className="col-md-12">
          <h2 className="display-6">{collectionTitle}</h2>
        </div>
      </div>
      <div className="row">
        <CollectionItem collectionItem={collectionItem}/>
        <CollectionItem collectionItem={collectionItem}/>
        <CollectionItem collectionItem={collectionItem}/>
        <CollectionItem collectionItem={collectionItem}/>
        <CollectionItem collectionItem={collectionItem}/>
        <CollectionItem collectionItem={collectionItem}/>
        <CollectionItem collectionItem={collectionItem}/>
        <CollectionItem collectionItem={collectionItem}/>
        <CollectionItem collectionItem={collectionItem}/>
      </div>
    </section>
  );
};

export default Collection;
