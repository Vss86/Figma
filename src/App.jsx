import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import './App.css';
import Header from "../src/components/Header";
import ProductImages from "../src/components/ProductImages";
import ProductInfo from "../src/components/ProductInfo";

function App() {
    const [selectedImage, setSelectedImage] = useState("./src/images/Rectangle.png");

    return (
        <CartProvider>
            <div className="App">
                <Header />
                <div className='productBody'>
                    <ProductImages setSelectedImage={setSelectedImage} />
                    <ProductInfo selectedImage={selectedImage} />
                </div>
            </div>
        </CartProvider>
    );
}

export default App;
