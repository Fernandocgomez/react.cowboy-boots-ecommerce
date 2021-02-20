import React from 'react'
import Collection from '../../Reusable-Components/Collection/Collection'
import Footer from '../../Reusable-Components/Footer/Footer'
import NavBar from '../../Reusable-Components/NavBar/NavBar'
import TopNavBar from '../../Reusable-Components/TopNavBar/TopNavBar'

const AllProducts = () => {
    return (
        <div>
            <TopNavBar />
            <NavBar />
            <Collection collectionTitle={"All Products"}/>
            <Footer />
        </div>
    )
}

export default AllProducts
