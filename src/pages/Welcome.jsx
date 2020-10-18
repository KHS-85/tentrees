import React from "react";
import Counter from './CounterNew'
import tree from '../gfx/tree.png'
import './style/welcome.scss'

const Welcome = () => {
    return (
        <div className="welcome text-center text-white no-gutters">
            <div className="container">

                <div className="row">
                    <div className="col tree py-5 mt-5">
                        <img src={tree} alt="a small tree" />
                    </div>
                </div>

                <div className="row">
                    <div className="col counter">
                        <Counter/>
                    </div>
                </div>

                <div className="row">
                    <div className="col counter-text pb-5 mb-5">
                        <p>Trees Planted to Date</p>
                        <p>We're planting 1 billion trees by 2030. It's simple:</p>
                        <p>Tentree keeps you looking good, while you keep the planet looking great.</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Welcome
