import React from 'react'
import '../styles/homepage/header.css'
import { IoLocationOutline } from 'react-icons/io5';

function HeaderTop() {
  return (
      <header>
        <div className="header">
            <div className="header_top-container">
              <div className="header_top_location">
                <IoLocationOutline size="1.2em" className="icon-map-pin"/>
                <p className="header_top_location_name cursor-pointer">Rajasthan, India</p>
              </div>
              <div className="header_top_actions-wrapper">
                <p className="header_top_action action-1">Find a store</p>
                <p className="header_top_action action-2">Contact Us</p>
              </div>
            </div>
        </div>
      </header>
  )
}

export default HeaderTop