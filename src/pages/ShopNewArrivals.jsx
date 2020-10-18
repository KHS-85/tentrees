import React from 'react'
import girl4 from '../gfx/girl4.jpg'
import girl2 from '../gfx/girl2.jpg'
import girl3 from '../gfx/girl3.jpg'

import './style/shopnewarrivals.scss'

const ShopNewArrivals = () => {
    return (
        <div>
            <div className="container shop">
                <div className="row pt-5">
                    <div className="col-12">
                        <h1 className="text-center">Shop New Summer Arrivals</h1>
                        <p className="text-center desc">Comfortable and sustainable styles for the best summer stay-cation.</p>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-12 col-lg-6 col-xl-4 pb-3">
                        <img src={girl4} alt="sporty woman in blue top and black shorts" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 pb-3">
                        <img src={girl2} alt="girl in long, purple dress" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 pb-3">
                        <img src={girl3} alt="girl in blue dress" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopNewArrivals
