import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/homepage/footer.css'
import { IoIosArrowForward } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
            <div className="footer-features-container">
                <div className="footer-features_feature feature-1">
                  <div className="footer-features_feature-title">
                    <p className="footer-features-title-text">New Trending</p>
                    <IoIosArrowForward size="1.5em" className="footer-features_features_title_arrow-icon arrow-right"/>
                  </div>
                  <p className="footer-features_feature-desc">Checkout out new trending collection</p>
                </div>
        
                <div className="footer-features_feature feature-2">
                  <div className="footer-features_feature-title">
                    <p className="footer-features-title-text">Madré Linda's World</p>
                    <IoIosArrowForward size="1.5em" className="footer-features_features_title_arrow-icon arrow-right"/>
                  </div>
                  <p className="footer-features_feature-desc">Dive into Madré Linda's world</p>
                </div>
        
                <div className="footer-features_feature feature-3">
                  <div className="footer-features_feature-title">
                    <p className="footer-features-title-text">Botique collection</p>
                    <IoIosArrowForward size="1.5em" className="footer-features_features_title_arrow-icon arrow-right"/>
                  </div>
                  <p className="footer-features_feature-desc">Checkout our new Botique collection.</p>
                </div>
            </div>

            <div className="footer-main">
                <div className="footer-main_top">
                  <Link to="/"> <p className="footer-main_brand cursor-pointer">Madré Linda</p> </Link>
                  <div className="footer-main_pills-section">
                    <p className="footer-main_pill-title">Customer Service</p>
                    <p className="footer-main_pill">Shipping</p>
                    <p className="footer-main_pill">Return and refunds</p>
                    <p className="footer-main_pill">Track your order</p>
                    <p className="footer-main_pill">FAQ's</p>
                    <p className="footer-main_pill">Site Map</p>
                  </div>
                  <div className="footer-main_pills-section">
                    <p className="footer-main_pill-title">Legal</p>
                    <p className="footer-main_pill">Corporate</p>
                    <p className="footer-main_pill">Careers Opportunities</p>
                    <p className="footer-main_pill">Terms and Conditions</p>
                    <p className="footer-main_pill">Privacy and cookies</p>
                  </div>
                  <div className="footer-main_pills-section">
                    <p className="footer-main_pill-title">Contact Us</p>
                    <p className="footer-main_pill">Chat Now</p>
                    <p className="footer-main_pill">Find a Store</p>
                    <p className="footer-main_pill">Boutique</p>
                  </div>
                  <div className="footer-main_contact-section">
                    <p className="footer-main_contact-section_subscribe">Please subscribe us to know more</p>
                    <div className="footer-main_contact-wrapper">
                      <input type="email" name="email" id="subscribe-input" className='subscribe-input' placeholder='Enter your e-mail'/>
                      <label htmlFor="subscribe-input" className='subscribe-input-btn cursor-pointer'>Subsscribe</label>
                    </div>
                  </div>
                </div>
                <div className="footer-main_mid-cards-wrapper">
                  --accepted cards--
                </div>
                <div className="footer-main_bottom">
                  <p className="footer-main_bottom_text">© Madrè Linda 2022. All rights reserved. Site – managed by <a href='https://github.com/Chiragmodi01' target="_blank" className="auther-name_footer"> Chirag modi</a> .</p>
                  <div className="footer-main_bottom_socials">
                    <FaFacebookF size="1em"/>
                    <FaTwitter size="1em"/>
                    <FaPinterest size="1em"/>
                    <FaInstagram size="1em"/>
                    <FaYoutube size="1em"/>
                    <FaLinkedinIn size="1em"/>
                  </div>
                </div>
              </div>
        </footer>
  )
}

export default Footer