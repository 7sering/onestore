import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/speaker-prod-1.webp"
const Search = ({setShowSearch}) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for product" />
        <MdClose onClick={() => setShowSearch(false)}/>
      </div>

    <div className="search-result-content">
        <div className="search-results">
            <div className="search-result-item">
                <div className="image-container">
                    <img src={prod} alt="product"/>
                </div>
                <div className="prod-details">
                        <span className="name">JBL Speaker</span>
                        <span className="desc">JBL Speaker</span>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
};

export default Search;
