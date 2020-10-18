import React from 'react'
import man2 from '../gfx/man2.jpg'
import girl1 from '../gfx/girl1.jpg'
import girl6 from '../gfx/girl6.jpg'

import './style/shopbycategory.scss'

const ShopByCategory = () => {
    return (
        <div>
            <div className="container shop">
                <div className="row pt-5">
                    <div className="col-12">
                        <h1 className="text-center">Shop by Category</h1>
                        <p className="text-center desc">Made for everyday living. We have something for everyone.</p>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-12 col-lg-6 col-xl-4 pb-3">
                        <div className="image-box">
                        <img className="zoomableImg" src={man2} alt="man in blue t-shirt" />
                        </div>
                        <p className="imgTXT">Shop Men's</p>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 pb-3">
                    <div className="image-box">
                        <img className="zoomableImg" src={girl1} alt="girl in long, dark-pink dress" />
                        </div>
                        <p className="imgTXT">Shop Women's</p>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4">
                    <div className="image-box">
                        <img className="zoomableImg" src={girl6} alt="girl with black bag, wearing a green suit" />
                        </div>
                        <p className="imgTXT">Shop Accessories</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopByCategory
