import React from 'react'
import { Link } from 'react-router-dom'
import Treeline from '../gfx/treeline.png'
import './style/404.scss'

const NotFound = () => {
    return (
        <div className="container text-center my-5 py-5">
            <img className="py-5 mt-5" src={Treeline} alt=""/>
            <h2 className="py-5">We can't find the page you are looking for</h2>
            <Link to="/home"><button id="button404">TAKE ME HOME</button></Link>
        </div>
    )
}

export default NotFound
