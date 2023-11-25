import React, { useState } from "react";
import styles from "./ProductImages.module.css";

function ProductImages() {
    const [selectedImage, setSelectedImage] = useState("./src/images/Rectangle.png");

    const handleThumbnailClick = (imagePath) => {
        setSelectedImage(imagePath);
    };

    return (
        <div>
            <div className={styles.imageContainer}>
                <img src={selectedImage} alt="product image" />
                <div className={styles.thumbnails}>
                    <img
                        src="./src/images/Rectangle.png"
                        alt="product image"
                        onClick={() => handleThumbnailClick("./src/images/Rectangle.png")}
                    />
                    <img
                        src="./src/images/Rectangle Copy 2.png"
                        alt="product image"
                        onClick={() => handleThumbnailClick("./src/images/Rectangle Copy 2.png")}
                    />
                    <img
                        src="./src/images/Rectangle Copy 3.png"
                        alt="product image"
                        onClick={() => handleThumbnailClick("./src/images/Rectangle Copy 3.png")}
                    />{
                    /* 
                    <img
                        src="./src/images/Rectangle Copy 4.png"
                        alt="product image"
                        onClick={() => handleThumbnailClick("./src/images/Rectangle Copy 4.png")}
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default ProductImages;
