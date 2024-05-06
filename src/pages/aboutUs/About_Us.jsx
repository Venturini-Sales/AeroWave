import React from "react";
import './About_Us.css'
import Container from "../../components/container/Container";
import faIMG from "../../assets/img/Frutiger-aero.png"
import vIMG from "../../assets/img/Vaporwave.png"

export const AboutUs = () => {

    return (

        <div className="aboutUs">
            
                
            <Container path="C:\About Us">

                <div className="title">Who we are?</div>
                <div className="subTitle">And what we do?</div>

                <div className="aboutUsText">
                <p className="text">At AeroWave, we're immersed in a passion for music and the cultural richness of vinyl records. As experts in Frutiger Aero and Vaporwave, our goal is to offer a complete experience for both analog and digital music enthusiasts.</p>
                <p className="text">Our collection is more than just a simple selection of albums - it's a journey through the sounds that define generations. Each record in our catalog is carefully curated to convey a unique atmosphere, a sonic story that resonates with the hearts of vinyl enthusiasts.</p>
                <p className="text">From timeless classics echoing through the decades to the latest releases shaping the future of music, AeroWave is your destination to discover and rediscover the sounds that inspire, move, and connect. Dive into our virtual shelves, explore the rhythms and melodies that define our musical culture, and find your next favorite piece at AeroWave.</p>
                <p className="text">We're here to share our passion, provide an exceptional shopping experience, and nurture the vinyl lovers' community worldwide. Join us on this musical journey - your next favorite sound is just a click away at AeroWave.</p>
                </div>

                <div className="frutigerAeroText">
                
                <img src={faIMG} className="aboutUsImg" alt="Frutiger aero image" />

                <div className="subText">
                    <div className="subTitle">What is Frutiger Aero?</div>
                    <p className="text">Frutiger Aero emerges as a symphony of visual harmony, drawing inspiration from the pulsating beats of electronic music. Its crisp lines and sleek curves echo the dynamic energy of techno, while its airy openness resonates with the ambient textures of chillwave. Each letter serves as a note in a grand musical score, contributing to the overall composition with its unique shape and form. The absence of serifs lends it a modern edge, while the subtle curvature of its strokes infuses it with a sense of fluidity and movement. Like a DJ manipulating soundwaves, the typographer orchestrates letters, crafting a fluid rhythm that dances across the page. Frutiger Aero transcends the confines of the page, inviting viewers to embark on a journey of discovery, much like a groundbreaking musical genre.</p>
                </div>

                </div>

                <div className="vaporwaveText">

                <div className="subText">
                    <div className="subTitle">And what is Vaporwave?</div>
                    <p className="text">Vaporwave, a musical genre with roots deep in the digital underground, offers a sonic landscape that echoes the nostalgic vibes of '80s and '90s culture. Its dreamy melodies, infused with warped samples and lo-fi beats, create a hypnotic rhythm that transports listeners to a realm of retro-futurism. Like Frutiger Aero's fusion of typography and musical inspiration, Vaporwave blends elements of past and present, crafting a sonic experience that resonates with both nostalgia and innovation.</p>
                </div>

                <img src={vIMG} className="aboutUsImg" alt="Vaporwave image" />

                </div>

            </Container>

         </div>

        
    )

}

export default AboutUs