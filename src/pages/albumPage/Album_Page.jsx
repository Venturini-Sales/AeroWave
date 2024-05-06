import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import './Album_Page.css'
import Container from "../../components/container/Container";
import SliderPreview from "../../components/sliderPreview/SliderPreview";
import AudioPlayer from "../../components/audioVisualizer/Audio";
import shippingImg from "../../assets/icons/shipping.png"
import oosImg from "../../assets/icons/OutOfStock.png"
import ProductCounter from "../../components/counter/Counter";
import BuyButton from "../../components/button/Button";
import albumDetails from "../../data/albuns";


export const AlbumPage = () => {

    const { album } = useParams();
    const { artist, name, price, frontImage, backImage, audio } = albumDetails[album.toLowerCase()]


    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="albumPage">
            <Container path={`C:\\Our Products\\${(artist)}`}>
                <div className="albumArea">
                    <div className="albumImageArea">
                         <SliderPreview images={[frontImage, backImage]} />
                    </div>

                    <div className="albumInformationArea"> 
                        <div className="albumName">{artist}</div>
                        <div className="musicName">{name}</div>
                        <div className="musicPrice">{price}</div>
                        <div className="musicPreview">
                            <AudioPlayer audioSrc={audio} />
                        </div>

                        <div className="shippingInfo">
                            <div className="shippingImg">
                                <img src={shippingImg} alt="shipping ico" />
                            </div>
                            <div className="shippingText">
                                Free shipping nationwide
                            </div>
                        </div>

                        <div className="outOfStockInfo">
                            <div className="outOfStockImg">
                                <img src={oosImg} alt="" />
                            </div>
                            <div className="outOfStockText">
                                This product is out of stock
                            </div>
                        </div>

                        <div className="productBuying">
                            
                            <ProductCounter/>
                            <BuyButton/>
                            
                            
                        </div>
                    </div>
                </div>
            </Container>
         </div>
    )
}

export default AlbumPage