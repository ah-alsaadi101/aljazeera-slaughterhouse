import { getProducts } from "../data/products"
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";    
export default function Home() {
  const products = getProducts();

    return (
        
        <div className="Page">
        <div className="home-container">
          <div className="home-hero">
            <h1 className="home-title">Welcome to Aljazeera Slaughterhouse</h1>
            <p className="home-subtitle">
                    We provide the freshest and highest quality meat products for our customers. Our commitment to excellence ensures that you receive the best cuts of meat, sourced from trusted suppliers. Whether you're looking for beef, lamb, or poultry, we have a wide selection to meet your needs. Experience the difference with Aljazeera Slaughterhouse,
                    where quality meets affordability.
            </p>
            </div>
            <div className="container">
                <h2 className="page-title">Our Products</h2>
             </div>   
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
                </div>
                </div>
    )
}