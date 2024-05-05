import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useState, useEffect } from 'react';

export const Home = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const handlePointerClick = (index) => {
        setCurrentSlide(index);
    };
    
    return (
        <div className='banner'>
            <div className='sliders' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

            <div className='slide bg1'>
                <div className='slideArea'>
                    <h1>Macintosh Plus</h1>
                    <h2>Floral Shoppe</h2>
                    <p>Try the trending album</p>   
                    <Link className="link" to={`/OurProducts/macintosh-plus-floral-shoppe`}>
                    <div className='button'>Click Here</div>
                    </Link>

                </div>
            </div>

            <div className='slide bg2'>
                <div className='slideArea'>
                    <h1>Blank Banshee</h1>
                    <h2>Blank Banshee Zero</h2>
                    <p>Try the trending album</p>
                    <Link className="link" to={`/OurProducts/blank-banshee-blank-banshee-zero`}>
                    <div className='button'>Click Here</div>
                    </Link>
                </div>
            </div>

            <div className='slide bg3'>
                <div className='slideArea'>
                    <h1>Saint Pepsi</h1>
                    <h2>Hit Vibes</h2>
                    <p>Try the trending album</p>
                    <Link className="link" to={`/OurProducts/saint-pepsi-hit-vibes`}>
                    <div className='button'>Click Here</div>
                    </Link>

                </div>
            </div>

            </div>

            <div className="slidersPointers">
                <div className={`pointer ${currentSlide === 0 ? 'active' : ''}`} onClick={() => handlePointerClick(0)}></div>
                <div className={`pointer ${currentSlide === 1 ? 'active' : ''}`} onClick={() => handlePointerClick(1)}></div>
                <div className={`pointer ${currentSlide === 2 ? 'active' : ''}`} onClick={() => handlePointerClick(2)}></div>
            </div>

        </div>
    )

}


export default Home