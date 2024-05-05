import React from "react";
import './Card.css' 

export default function Card ({albumName, albumPrice, albumFrontImage, albumBackImage }) {
    return (
        <div className='card'>
            <div className='imgSpin'>
                <div className='img'>
                    <div className='frontCard'><img src={albumFrontImage} alt="" /></div>
                    <div className='backCard'><img src={albumBackImage} alt="" /></div>
                </div>
            </div>
            <div className='albumInfo'>

                <div className='albumName'>{albumName}</div>
                <div className='albumPrice'>
                    {albumPrice}
                </div>

                <div></div>

            </div>
        </div>
    )
}
