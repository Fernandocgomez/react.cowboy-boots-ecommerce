// Modules
import React from 'react'
// Components
import Hero from '../../Reusable-Components/Hero/Hero'
import NavBar from '../../Reusable-Components/NavBar/NavBar'
import ParallaxScrolling from '../../Reusable-Components/ParallaxScrolling/ParallaxScrolling'
import TopNavBar from '../../Reusable-Components/TopNavBar/TopNavBar'
import Collection from '../../Reusable-Components/Collection/Collection'
import Footer from '../../Reusable-Components/Footer/Footer'

const Home = (props) => {
    return (
        <div>
            <TopNavBar />
            <NavBar />
            <Hero />
            <Collection collectionTitle={"Feature Products"}/>
            <ParallaxScrolling />
            <Footer />
        </div>
    )
}

export default Home