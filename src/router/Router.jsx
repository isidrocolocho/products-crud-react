import { Routes,Route } from "react-router-dom";
import Catalog from '../views/Catalog';
import CreateProduct from '../views/CreateProduct';
import Navbar from "../views/partials/Navbar";
import Footer from "../views/partials/Footer";

const Router = () => {
    return(
        <div> 
            <Navbar/>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/create-product" element={<CreateProduct />} />
            </Routes>
            <Footer/> 
        </div>
    )
}

export default Router;