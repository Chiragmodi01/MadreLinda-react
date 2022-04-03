import React from 'react'
import '../styles/homepage/homepage.css';
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import EachCardLanding from '../comps/EachCardLanding';
import { useProducts } from '../helpers/context/products-context';
import { img1big, img2big, img3big, img4big, img5big, img6landing, img7landing, img8landing, img9landing, img10landing, img1landing, heroVideo, heroVideoPoster } from "../assets/images/productImages";

function HomePage() {
  let navigate = useNavigate();
  const { state } = useProducts();

  return (
    <main>
             <div className="homePage_hero-container">
            <section className="homePage_hero_section section-1">
              <img src={img4big} alt="img" className="homePage_hero_section_img" />
            <div className="hero_img-overlay cursor-pointer">
              <p className="hero-img-overlay-text" onClick={() => navigate("../products", { replace: true })}>Women's Collection</p>
            </div>
            </section>
            <section className="homePage_hero_section section-2">
              <img src={img5big} alt="img" className="homePage_hero_section_img" />
            <div className="hero_img-overlay cursor-pointer">
              <p className="hero-img-overlay-text" onClick={() => navigate("../products", { replace: true })}>Men's Collection</p>
            </div>
            </section>
        </div>

        <div className="homePage_trendingHer-container">
            <div className="homePage_trendingHer_header">
                <p className="trendingHer_header_title">Trending categories in Women</p>
            </div>
            <div className="homePage_trendingHer_collection">
              <div className="homePage_trendingHer_section section-1">
                  <div className="trendingHer_section_item item-1">
                    <div className="trendingHer_img-overlay">
                      <p className="trendingHer_img_overlay_product-desc">Embroidered pocket dress</p>
                      <p className="trendingHer_img_overlay_brand-name">Dress</p>
                    </div>
                  <img src={img6landing} alt="img" className="trendingHer_section-img top" />
                  </div>
                  <div className="trendingHer_section_item item-2">
                    <div className="trendingHer_img-overlay">
                      <p className="trendingHer_img_overlay_product-desc">Flannel red long coat</p>
                      <p className="trendingHer_img_overlay_brand-name">Winter</p>
                    </div>
                  <img src={img7landing} alt="img" className="trendingHer_section-img top" />
                  </div>
              </div>
              <div className="homePage_trendingHer_section section-2">
                  <div className="trendingHer_section_item item-1">
                    <div className="trendingHer_img-overlay">
                      <p className="trendingHer_img_overlay_product-desc">Gilet sunray dress</p>
                      <p className="trendingHer_img_overlay_brand-name">Summer</p>
                    </div>
                  <img src={img8landing} alt="img" className="trendingHer_section-img flip" />
                  </div>
                  <div className="trendingHer_section_item item-2">
                    <div className="trendingHer_img-overlay">
                      <p className="trendingHer_img_overlay_product-desc">Zipped leather jacket</p>
                      <p className="trendingHer_img_overlay_brand-name">Jacket</p>
                    </div>
                  <img src={img9landing} alt="img" className="trendingHer_section-img flip" />
                  </div>
                  <div className="trendingHer_section_item item-3">
                    <div className="trendingHer_img-overlay">
                      <p className="trendingHer_img_overlay_product-desc">Beavour Botique dress</p>
                      <p className="trendingHer_img_overlay_brand-name">Botique</p>
                    </div>
                  <img src={img10landing} alt="img" className="trendingHer_section-img" />
                  </div>
              </div>
            </div>
        </div>

        <div className="homePage_trendingHim-container">
            <div className="homePage_trendingHim_section section-1">
                <div className="homePage_trendingHim_video-header">
                    <p className="homePage_trendingHim_video-header_heading">Men's summer 2022 collection</p>
                    <p className="homePage_trendingHim_video-header_sub-heading">Summer 2022 brings a breath of optimism and lightness Bold and casual, Hermès men defy gravity and define their own perspectives.</p>
                    <p className="homePage_trendingHim_video-header_action cursor-pointer">Discover the collection</p>
                </div>
                <div className="trendingHim_section-1_video-container">
                    <video width="1000" height="570" poster={heroVideoPoster} controls className='trendingHim_section-1_video'>
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
    
            <div className="homePage_trendingHim_section section-2">
                <div className="homePage_trendingHim_collection-header">
                <p className="homePage_trendingHim_collection-header_heading">Brand name collection</p>
                    <p className="homePage_trendingHim_collection-header_sub-heading">Elegant summer collection for Men and Women Inspired by the colors and culture of egypt.</p>
                    <p className="homePage_trendingHim_collection-header_action cursor-pointer">Stud your style</p>
                </div>
                <div className="trendingHim_section_collection">
                    <div className="trendingHim_section_collection_section section-1"></div>
                    <div className="trendingHim_section_collection_item item-1">
                    <img src={img1big} alt="img" className="trendingHim_collection-img" />
                    </div>
                    <div className="trendingHim_section_collection_item item-2">
                         { state.products.length > 0 && <EachCardLanding index={4} />}
                    </div>
                    <div className="trendingHim_section_collection_item item-3">
                         { state.products.length > 0 && <EachCardLanding index={11} />}
                    </div>
                    <div className="trendingHim_section_collection_item item-4">
                         { state.products.length > 0 && <EachCardLanding index={21} />}
                    </div>
                    <div className="trendingHim_section_collection_item item-5">
                         { state.products.length > 0 && <EachCardLanding index={6} />}
                    </div>
                </div>
            </div>
        </div>

        <div className="homePage_new-categories-container">
            <div className="homePage_new-categories_section section-1">
              <img src={img2big} alt="img" className="new-categories_section_main_img left" />
            </div>
            <div className="homePage_new-categories_section section-2">
              <div className="new-categories_section-2_header">
                <p className="new-categories_section-2_header-title">Madré Linda's Exclusive</p>
                <p className="new-categories_section-2_header-subtitle">The Collection is available exclusively online</p>
                <p className="new-categories_section-2_header-action">Shop now</p>  
              </div>
              <div className="new-categories_section-2_main">
              <IoIosArrowBack size="1em" className="new-categories_section-2_main-arrow-icon arrow-left"/>
                <img src={img1landing} alt="img" className="new-categories_section_main_img right" />
                <IoIosArrowForward size="1em" className="new-categories_section-2_main-arrow-icon arrow-right"/>
              </div>
              <div className="new-categories_section-2_bottom">
              <p className="new-categories_section-2_bottom-product-name">Bikini with wraparound lace ties</p>
              <p className="new-categories_section-2_bottom-product-price">$695</p>
              <p className="new-categories_section-2_bottom-product-index">. . . .</p>
              </div>
            </div>
        </div>

        <div className="homePage_boutique-container">
            <img src={img3big} className="homePage_boutique_img" />
            <div className="homePage_boutique_desc">
                <p className="homePage_boutique_desc-title">Book your appointment in our boutiques</p>
                <p className="homePage_boutique_desc-action cursor-pointer btn-fat btn-hover-fill">Discover the closest store to you</p>
            </div>
        </div>
    </main>
  )
}

export default HomePage