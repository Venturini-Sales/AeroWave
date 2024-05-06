import React from 'react';
import { Link } from 'react-router-dom';
import './Our_Products.css'
import '../../components/card/Card'
import mpAlbumBack from '../../assets/img/1.png'
import mpAlbumFront from '../../assets/img/1front.jpg'
import spAlbumBack from '../../assets/img/2.png'
import spAlbumFront from '../../assets/img/2front.jpg'
import bbAlbumBack from '../../assets/img/3.png'
import bbAlbumFront from '../../assets/img/3front.jpg'
import wbAlbumBack from '../../assets/img/4.png'
import wbAlbumFront from '../../assets/img/4front.jpg'
import w9AlbumBack from '../../assets/img/5.png'
import w9AlbumFront from '../../assets/img/5front.jpg'
import mbAlbumBack from '../../assets/img/6.png'
import mbAlbumFront from '../../assets/img/6front.jpg'
import srpAlbumBack from '../../assets/img/7.png'
import srpAlbumFront from '../../assets/img/7front.jpg'
import oAlbumBack from '../../assets/img/8.png'
import oAlbumFront from '../../assets/img/8front.jpg'
import tfAlbumBack from '../../assets/img/9.png'
import tfAlbumFront from '../../assets/img/9front.jpg'
import Container from "../../components/container/Container";
import Card from '../../components/card/Card';


export const OurProducts = () => {

    return (

        <div className='ourProducts'>

            <Container path="C:\Our Products">  

            <div className='productsHeader'>
                <div className='productsTitle'>Discs</div>
                <div className='showingArea'>
                    <div className='showingText'>Showing all 9 results</div>

                    <div className='showingFunction'>
                    <label htmlFor="per_page" style={{ marginRight: '10px'}}>Displaying:</label>
                    <select id= "per_page" name="per_page">
                        <option value="20">20</option>
                        <option value="40">40</option>
                        <option value="60">60</option>
                        <option value="80">80</option>
                    </select>
                    </div>

                </div>
            </div>

            <div className='albunsArea'>
                
            <Link className="link" to={`/OurProducts/macintosh-plus-floral-shoppe`}>
            <Card albumFrontImage={mpAlbumFront} albumBackImage={mpAlbumBack} albumName="Macintosh Plus - Floral Shoppe" albumPrice="$40.50"/>   
            </Link>

            <Link className="link" to={`/OurProducts/saint-pepsi-hit-vibes`}>
            <Card  albumFrontImage={spAlbumFront} albumBackImage={spAlbumBack} albumName="Saint Pepsi - Hit Vibes" albumPrice="$37.75"></Card>            
            </Link>

            <Link className="link" to={`/OurProducts/blank-banshee-blank-banshee-zero`}>
            <Card albumFrontImage={bbAlbumFront} albumBackImage={bbAlbumBack} albumName="Blank Banshee - Blank Banshee 0" albumPrice="$49.99"/>      
            </Link>

            <Link className="link" to={`/OurProducts/webinar-deepdive`}>
            <Card  albumFrontImage={wbAlbumFront} albumBackImage={wbAlbumBack} albumName="Webinar™ - www.deepdive.com" albumPrice="$60.53"></Card>   
            </Link>

            <Link className="link" to={`/OurProducts/windows96-date-new-aesthetic`}>
            <Card albumFrontImage={w9AlbumFront} albumBackImage={w9AlbumBack} albumName="Windows96 - Dated New Aesthetic" albumPrice="$36.40"/>               
            </Link>

            <Link className="link" to={`/OurProducts/macroblank-missing`}>
            <Card  albumFrontImage={mbAlbumFront} albumBackImage={mbAlbumBack} albumName="Macroblank - 行方不明" albumPrice="$43.90"></Card>
            </Link>

            <Link className="link" to={`/OurProducts/slowerpace-lost-in-space`}>
            <Card albumFrontImage={srpAlbumFront} albumBackImage={srpAlbumBack} albumName="slowerpace 音楽 - Lost in space 宇宙の冒険" albumPrice="$50.59"/>   
            </Link>

            <Link className="link" to={`/OurProducts/oscob-praise-the-sun-god`}>
            <Card  albumFrontImage={oAlbumFront} albumBackImage={oAlbumBack} albumName="OSCOB - praise the sun god" albumPrice="$62.90"></Card>
            </Link>

            <Link className="link" to={`/OurProducts/time-fragment-ironclad`}>
            <Card  albumFrontImage={tfAlbumFront} albumBackImage={tfAlbumBack} albumName="Time Fragment - 装甲艦" albumPrice="$66.60"></Card>
            </Link>
            
            </div>
            
            </Container>
            
        </div>
    )
}

export default OurProducts