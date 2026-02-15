import React, { useState } from 'react';
import leftCarouselImg from "../../assets/leftCarousel.svg";
import rightCarouselImg from "../../assets/rightCarousel.svg";

const AlertTabImageCarousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = data?.carousel || [];

    const handlePrev = () => {
        if (!images.length) return;
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        if (!images.length) return;
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    if (!images.length) return null;

    return (
        <div className="relative w-full h-full overflow-hidden bg-[#111111]">

            <img
                src={images[currentIndex]}
                alt="carousel"
                className="w-full h-full object-cover transition-all duration-300"
            />

            <div
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1 cursor-pointer hover:bg-gray-800 transition-colors"
            >
                <img src={leftCarouselImg} className="w-4 h-4" />
            </div>

            <div
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1 cursor-pointer hover:bg-gray-800 transition-colors"
            >
                <img src={rightCarouselImg} className="w-4 h-4" />
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 w-full flex justify-center gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full cursor-pointer ${currentIndex === index
                                ? "bg-white"
                                : "bg-gray-500"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AlertTabImageCarousel;

