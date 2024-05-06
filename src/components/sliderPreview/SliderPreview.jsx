import React, { useState } from "react";
import './SliderPreview.css';

const SliderPreview = ({ images }) => {
    const [mainImage, setMainImage] = useState(images[0]); 
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handlePreviewHover = (image, index) => {
        setMainImage(image);
        setSelectedImageIndex(index);
    };

    return (
        <div className="sliderPreview">
            <div className="previewImages">
                {images.map((image, index) => (
                <div 
                    className={`previewImageContainer ${selectedImageIndex === index ? 'selected' : ''}`}
                    key={index}
                    onMouseEnter={() => handlePreviewHover(image, index)}
                > 
                    <img
                        src={image}
                        alt={`Preview ${index + 1}`}
                    />
                </div>
                ))}
            </div>
            <div className="mainImage">
                <img src={mainImage} alt="Main Image" />
            </div>
        </div>
    );
};

export default SliderPreview;
