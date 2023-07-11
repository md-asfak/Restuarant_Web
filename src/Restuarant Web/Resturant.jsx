import React from 'react'
import logo from "./Image/images/logo.png"
import hero from "./Image/images/hero_image.png"
import fimg_1 from "./Image/icons/discount.png"
import fimg_2 from "./Image/icons/fresh.png"
import fimg_3 from "./Image/icons/delivery.png"
import grid_1 from "./Image/images/grid_image1.png"
import grid_2 from "./Image/images/grid_image2.png"
import grid_3 from "./Image/images/grid_image3.png"
import grid_4 from "./Image/images/grid_image4.png"
import grid_5 from "./Image/images/grid_image5.png"
import grid_6 from "./Image/images/grid_image6.png"
import grid_7 from "./Image/images/grid_image7.png"



export default function Resturant() {
    return (
        <>
            <nav>
                <div className="navigation container">
                    <div className="logo_container">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="bar_icon">
                        <i className='fas fa-bars'></i>
                    </div>
                </div>
            </nav>

            {/* hero section */}

            <div className="container">
                <div className="hero">

                    <div className="hero_img">
                        <img src={hero} alt="#" />
                    </div>
                    <div className="hero_content">
                        <h4 className='tag'>50% Off All Products</h4>
                        <h1>  Enjoy Your Delicious Food </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae maiores autem magnam. Ipsam, inventore?</p>
                        <button className='btn_hero btn'>Explore Now</button>
                    </div>
                </div>


                {/* fetures section */}

                <section className='fetures'>
                    <div className="feture">
                        <img src={fimg_1} alt="#" />
                        <div className="feture_content">
                            <h3>Discount Voucher</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, optio!</p>
                        </div>
                    </div>

                    <div className="feture">
                        <img src={fimg_2} alt="#" />
                        <div className="feture_content">
                            <h3>Fresh healthy Food</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, optio!</p>
                        </div>
                    </div>

                    <div className="feture">
                        <img src={fimg_3} alt="#" />
                        <div className="feture_content">
                            <h3>Fast Home Delivery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, optio!</p>
                        </div>
                    </div>
                </section>

                <div className="divider"> <hr /> </div>

                <div className="menu">
                    <h4 className='tag'> Our Menu </h4>
                    <h2 >Explore Our Menu</h2>


                    <div className="grid">

                        <div className="item_1 grid"><img src={grid_1} alt="#" /></div>
                        <div className="item_2 grid"><img src={grid_2} alt="#" /></div>
                        <div className="item_3 grid"><img src={grid_3} alt="#" /></div>
                        <div className="item_4 grid"><img src={grid_4} alt="#" /></div>
                        <div className="item_5 grid"><img src={grid_5} alt="#" /></div>
                        <div className="item_6 grid"><img src={grid_6} alt="#" /></div>
                        <div className="item_7 grid"><img src={grid_7} alt="#" /></div>
                    </div>
                </div>
            </div>

            {/* footer section */}

            <footer>
                <div className="footer_container container">
                    <div className="footer_logo">
                        <img src={logo} alt="#" />
                    </div>
                    <div className="link_list">
                        <h3>Main Link</h3>
                        <ul>
                            <li><a href="#"> Order Tracking</a></li>
                            <li><a href="#">New Order</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">News & Blogs</a></li>

                        </ul>
                    </div>
                    <div className="link_list">
                        <h3> Support</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Tern & Condition</a></li>

                        </ul>
                    </div>


                    <div className="link_list">
                        <h3>Joint Our News Letter</h3>
                        <input type="text" placeholder='Example@gmail.com' />
                        <h3>Follow Us </h3>
                        <div className="icon">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>

                </div>
            </footer>

        </>
    )
}
