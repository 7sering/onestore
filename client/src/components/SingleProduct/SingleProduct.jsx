import "./SingleProduct.scss";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="product" />
          </div>
          <div className="right">
            <span className="name">O2 Earbud</span>
            <span className="price">$25.99</span>
            <span className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
              accusantium, libero quasi numquam assumenda fugiat veniam
              consectetur esse error iusto quis nihil dolorum beatae, cumque
              iure ratione, accusamus quae aliquid!
            </span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} /> Add to cart
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>Headphones</span>
              </span>

              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF /> <FaInstagram /> <FaTwitter /> <FaLinkedin />{" "}
                  <FaPinterest />
                </span>
              </span>
            </div>
          </div>
        </div>

        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
