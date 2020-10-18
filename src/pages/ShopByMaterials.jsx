import React from 'react'
import tencel from '../gfx/tencel.jpg'
import hemp from '../gfx/hemp.jpg'
import poly from '../gfx/poly.jpg'

import './style/shopbymaterials.scss'

const ShopByMaterials = () => {
    return (

        <div className="container-fluid shop shopm justify-content-center">

            <div className="row pt-5">
                <div className="col-12">
                    <h1 className="text-center">Shop by Materials</h1>
                    <p className="text-center desc">We use the most sustainable, and eco-friendly materials available.</p>
                </div>
            </div>

            <div className="row py-5 shop justify-content-center">
                
                <div className="col pb-3">
                    <div className="image-box1">
                        <img src={tencel} alt="Tencel material" />
                        <p className="imgTXT3 pt-3">Our zero-waste hero. Tencel<sup>TM</sup> creates durable, and easy-to-wear fibre from sustainably sourced wood pulp.</p>
                        <p className="shopLink"><a href="/shop" >SHOP NOW</a></p>
                    </div>
                    <p className="imgTXT1">Tencel<sup>TM</sup></p>
                    <p className="imgTXT2">Comfortable and wearable wood pulp.</p>
                    

                </div>

                <div className="col pb-3">
                    <div className="image-box1">
                        <img src={hemp} alt="Hemp material" />
                        <p className="imgTXT3 pt-3">It saves water, uses less land, and grows quickly. Hemp is here to help.</p>
                        <p className="shopLink"><a href="/shop" >SHOP NOW</a></p>
                    </div>
                    <p className="imgTXT1">Hemp</p>
                    <p className="imgTXT2">Have your hemp and wear it too.</p>
                </div>

                <div className="col pb-3">
                    <div className="image-box1">
                        <img src={poly} alt="Polyester material" />
                        <p className="imgTXT3 pt-3">From bottles to hoodies, and sweats. Plastic, petroleum-based products get a new life without cluttering landfills.</p>
                        <p className="shopLink"><a href="/shop" >SHOP NOW</a></p>
                    </div>
                    <p className="imgTXT1">Polyester</p>
                    <p className="imgTXT2">single-use plastic gets a makeover.</p>
                </div>

            </div>

        </div>

    )
}

export default ShopByMaterials