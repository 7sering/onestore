import "./Product.scss";
const Product = ({src}) => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={src} alt="earbud" srcset="" />
        </div>
        <div className="product-details">
            <span className="name">Samsung O2 Earbud</span>
            <span className="price">$8.99</span>
        </div>
    </div>;
};

export default Product;
