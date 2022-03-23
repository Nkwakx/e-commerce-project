import React, { useState, useEffect } from "react";
import SliderContent from "./SliderContent";
import ImgSlider from "./ImgSlider";
import Arrows from "./Arrows";
import Dots from "./Dots";


const len = ImgSlider.length - 1;

export default function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} imageSlider={ImgSlider} />
            <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex < 0 ? len : activeIndex + 1)
                }
            />
            <Dots
                activeIndex={activeIndex}
                imageSlider={ImgSlider}
                onClick={activeIndex => setActiveIndex(activeIndex)}
            />
        </div>

    )
}
