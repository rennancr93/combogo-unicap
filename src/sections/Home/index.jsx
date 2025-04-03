import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import Slide1 from "../../assets/slide1.png";
import Slide2 from "../../assets/slide2.png";
import Slide3 from "../../assets/slide3.png";
import Slide4 from "../../assets/slide4.png";
import Capa from "../../assets/capa2.png";

import { Scroll } from "phosphor-react";

export function Home() {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSlide((prevSlide) => (prevSlide < 300 ? prevSlide + 100 : 0));
        }, 5000);

        return () => clearInterval(intervalo);
    }, []);

    

    return (
        <section className={styles.container} id="home">
            <div className={styles.slideContainer}>
                <div className={styles.slider} style={{transform: `translateX(-${slide}%)`}}>
                    <img src={Slide1} alt="" style={{ backgroundColor: "blue" }} />
                    <img src={Slide2} alt="" style={{ backgroundColor: "red" }}/>
                    <img src={Slide3} alt="" style={{ backgroundColor: "yellow" }}/>
                    <img src={Slide4} alt="" style={{ backgroundColor: "green" }}/>
                </div>
            </div>

            <img src={Capa} alt="logo" className={styles.logo} />


          <a href="#sobre" className={styles.btn}>
            <div className={styles.scroll}> </div>
          </a>

            
        </section>
    );
}