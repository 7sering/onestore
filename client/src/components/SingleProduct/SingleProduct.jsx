import { useState } from "react";
import "./SingleProduct.scss";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  if (!data) return;

  const increment = () => {
    setQuantity((prevSate) => prevSate + 1);
  };
  const decrement = () => {
    setQuantity((prevSate) => {
      if (prevSate === 1) return 1;
      return prevSate - 1;
    });
  };

  const product = data.data[0].attributes;
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product.img.data[0].attributes.url
              }
              alt="product"
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">${product.price}</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} /> Add to cart
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
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

        <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
      </div>
    </div>
  );
};

export default SingleProduct;
