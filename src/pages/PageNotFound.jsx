import React from 'react'
import '../styles/PageNotFound/PageNotFound.css';
import pageNotFound from "../assets/gifs/page-not-found.gif";

function PageNotFound() {
  return (
    <div className='PageNotFound-container'>
        <img src={pageNotFound} alt="404"/>
    </div>
  )
}

export default PageNotFound;