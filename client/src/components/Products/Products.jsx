import Product from "./Product/Product";
import "./Products.scss";

import pro1 from "../../assets/products/earbuds-prod-1.webp"
import pro2 from "../../assets/products/earbuds-prod-2.webp"
import pro3  from "../../assets/products/earbuds-prod-3.webp"
import pro4  from "../../assets/products/earbuds-prod-4.webp"
import pro5  from "../../assets/products/earbuds-prod-5.webp"
import pro6  from "../../assets/products/headphone-prod-6.webp"
import pro7  from "../../assets/products/headphone-prod-1.webp"
import pro8  from "../../assets/products/earbuds-prod-4.webp"
const Products = ({innerPage, headingText}) => {
  return (
    <div className="products-container">
     {!innerPage && <div className="product-heading">{headingText}</div>}
      <div className="products">
        <Product src={pro1}/>
        <Product src={pro2}/>
        <Product src={pro3}/>
        <Product src={pro4}/>
        <Product src={pro5}/>
        <Product src={pro6}/>
        <Product src={pro7}/>
        <Product src={pro8}/>
      </div>
    </div>
  );
};

export default Products;
