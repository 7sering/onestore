import "./Product.scss";
import prod from  '../../../assets/products/earbuds-prod-1.webp'
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="earbud" srcset="" />
        </div>
        <div className="product-details">
            <span className="name">Samsung O2 Earbud</span>
            <span className="price">$8.99</span>
        </div>
    </div>;
};

export default Product;
