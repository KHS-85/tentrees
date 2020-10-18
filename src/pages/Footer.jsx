import React from 'react'
import iconFB from '../gfx/footer/iconFB.svg'
import iconInsta from '../gfx/footer/iconInsta2.png'
import iconYouTube from '../gfx/footer/iconYouTube.svg'
import iconCert from '../gfx/footer/iconCert.svg'
import icon124 from '../gfx/footer/icon124.png'
import iconFlag from '../gfx/footer/flag.png'

import amex from '../gfx/footer/ycard_amexp.svg'
import maestro from '../gfx/footer/ycard_maestro.svg'
import master from '../gfx/footer/ycard_mastercard.svg'
import visa from '../gfx/footer/ycard_visa.svg'
import paypal from '../gfx/footer/ycard_paypal.svg'


import './style/footer.scss'

const Footer = () => {
    return (
        <div className="Footer-Element">
            <div className="container pt-5">
                <div className="row">

                    <div className="col-12 col-xs-2 col-md-3 pb-4">
                        <ul className="footer-list text-center text-sm-left">
                            <h4>Help</h4>
                            <li><a href="tel:+">+44(0)1573 772448</a></li>
                            <li><a href="mailto:">info@tentrees.co.uk</a></li>
                            <li><a href="/terms">Terms and Conditions</a></li>
                            <li><a href="/terms">Privacy Policy</a></li>
                            <li><a href="/terms">Delivery</a></li>
                            <li><a href="/terms">Returns</a></li>
                            <li><a href="/terms">COVID-19 FAQs</a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-xs-2 col-md-3 pb-4">
                        <ul className="footer-list text-center text-sm-left">
                            <h4>Shop</h4>
                            <li><a href="/delivery">Delivery</a></li>
                            <li><a href="/newlink">Men's</a></li>
                            <li><a href="/newlink">Women's</a></li>
                            <li><a href="/newlink">Accessories</a></li>
                            <li><a href="/newlink">Custom Orders</a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-xs-2 col-md-3 pb-4">
                        <ul className="footer-list text-center text-sm-left">
                            <h4>Company</h4>
                            <li><a href="/newlink">About Us</a></li>
                            <li><a href="/newlink">Carees</a></li>
                            <li><a href="/newlink">Ambassador</a></li>
                            <li><a href="/newlink">Become a Retailer</a></li>
                            <li><a href="/newlink">Store Locator</a></li>
                            <li><a href="/newlink">Tree Planting FAQ</a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-xs-2 col-md-3 pb-4">
                        <div className="footer-list text-center text-sm-left">
                            <h4>Social</h4>
                            <a href="https://www.facebook.com/tentree"><img className="social" src={iconFB} alt="Facebook Icon" /></a>
                            <a href="https://www.instagram.com/tentree/"><img className="social" src={iconInsta} alt="Instagram Icon" /></a>
                            <a href="https://www.youtube.com/user/TenTreeApparel"><img className="social" src={iconYouTube} alt="YouTube Icon" /></a>
                            <br /><br />
                            <a href="https://bcorporation.net/directory/tentree-international"><img src={iconCert} alt="Certified Icon" /></a>
                            <a href="https://bcorporation.net/directory/tentree-international"><img src={icon124} alt="Certified Icon grade 124" /></a>
                            <p>Top 1% for manufacturing</p>


                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <h5 className="py-3">Store Select by Country</h5>
                        <div className="row text-center select-block justify-content-center">
                            
                            <div className="col-1 px-0"><img src={iconFlag} id="flag-icon" alt="British flag icon" /></div>
                            <div className="col-3 px-0">
                                <div className="form-group fake-select">
                                    <select className="form-control" id="countrySelect">
                                        <option>United Kingdom</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                        <option>United States</option>
                                    </select>
                                </div>
                            </div>
                            
                        </div>

                        <div className="row">
                            <div className="col-12 payment">
                        <p>All prices in Britsh Stirling.</p>
                        
                        {/* payment card icons */}
                        <img className="paycard" src={amex} alt="amex card icon"/>
                        <img className="paycard" src={maestro} alt="maestro card icon"/>
                        <img className="paycard" src={master} alt="mastercard icon"/>
                        <img className="paycard" src={paypal} alt="paypal icon"/>
                        <img className="paycard" src={visa} alt="visa card icon"/>

                        <p className="text-center py-3">©2020 tentree. All Rights Reserved. <a href="/terms">Terms & Privacy</a></p>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
