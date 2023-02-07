import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return <div>
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque quod vel voluptatum commodi. Nostrum deleniti voluptatem ratione qui quo cumque totam vel ut repudiandae expedita soluta atque, ipsa ipsam!
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="featured-product"/>
            </div>
        </div>
    </div>;
};

export default Banner;
