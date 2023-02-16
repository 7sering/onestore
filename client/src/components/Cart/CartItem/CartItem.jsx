import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-4.webp"
const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={prod} alt="product"  />
            </div>

            <div className="prod-details">
                <span className="name">O2 Earbuds 2.0</span>
                <MdClose className="close-btn"/>
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>3</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>x</span>
                    <span className="highlight">$35.99</span>
                </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
