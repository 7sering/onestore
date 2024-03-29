import { BrowserRouter, Routes, Route } from "react-router-dom";

// Internal Import
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";


import AppContext from "./utils/context";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Success from "./components/success/Success";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Newsletter/>
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
