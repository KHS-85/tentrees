import React from 'react'
import Intro from './Intro'
import Outro from './Outro'
import Welcome from './Welcome'
import ShopByCategory from './ShopByCategory'
import ShopByMaterials from './ShopByMaterials'
import ShopNewArrivals from './ShopNewArrivals'

const Home = () => {
    return (
        <div>
            <Intro/>
            <Welcome/>
            <ShopByCategory/>
            <ShopNewArrivals/>
            <ShopByMaterials/>   
            <Outro/>
        </div>
    )
}

export default Home
