// Modules
import React from 'react'
// Components
import Footer from '../../Reusable-Components/Footer/Footer';
import NavBar from '../../Reusable-Components/NavBar/NavBar'
import ProductCtaButton from '../../Reusable-Components/ProductCtaButton/ProductCtaButton';
import ProductPrice from '../../Reusable-Components/ProductPrice/ProductPrice';
import ProductQuantity from '../../Reusable-Components/ProductQuantity/ProductQuantity';
import ProductReview from '../../Reusable-Components/ProductReview/ProductReview';
import ProductReviewOverall from '../../Reusable-Components/ProductReviewOverall/ProductReviewOverall';
import ProductSizeDropdown from '../../Reusable-Components/ProductSizeDropdown/ProductSizeDropdown';
import ProductStarts from '../../Reusable-Components/ProductStarts/ProductStarts';
import ProductTimer from '../../Reusable-Components/ProductTimer/ProductTimer';
import TopNavBar from '../../Reusable-Components/TopNavBar/TopNavBar'

const Product = () => {
    return (
        <div>
            <TopNavBar />
            <NavBar />
            <section className="container pb-md-5">
                <div className="row pt-3">
                    <div className="col-md-7 text-center pb-2">
                        <img src="https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw6f6c491c/images/zoom/10002227_3-4_front.jpg?sw=800&sh=800" alt="" srcset="" className="img-fluid pb-3" />
                    </div>
                    <div className="col-md-5">
                        <h1 className="h2">Heritage Roughstock Western Boot</h1>
                        <ProductStarts />
                        <ProductSizeDropdown />
                        <ProductPrice />
                        <ProductQuantity />
                        <ProductTimer />
                        <ProductCtaButton />
                    </div>
                </div>
            </section>
            <section className="container pt-5 pb-4">
                <ProductReviewOverall />
                <ProductReview />
                <ProductReview />
                <ProductReview />
                <ProductReview />
                <ProductReview />
                <ProductReview />
                <ProductReview />
            </section>
            <Footer />
        </div>
    )
}

export default Product
