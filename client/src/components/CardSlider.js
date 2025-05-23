import React, { useState } from "react";
import "./CardSlider.css";

const places = [
  { name: "Zurich", img: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_380,h_360/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2023/01/24/07/11/56/zuerich-aerial.jpg" },
  { name: "Geneva", img: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_380,h_360/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/10/26/14/20/49/a-city-geneva-jet-deau.jpg" },
  { name: "Interlaken", img: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_380,h_360/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/11/09/09/53/56/interlaken-with-triumvirate-eiger-mnch-and-jungfrau.jpg" },
  { name: "Lucerne", img: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_380,h_360/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/st/gadmin/images/cities/winter/cities/st0035250_28410.jpg" },
  { name: "Basel", img: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_380,h_360/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/04/05/08/42/16/basel-panorama-at-dusk.jpg" },
  { name: "Zermatt", img: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_380,h_360/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2024/07/03/14/44/05/zermatt-cervo-mountain-resort.jpg" },
  { name: "Montreux", img: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_380,h_360/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/resources/places/m/o/montreux%20riviera/images%20winter/42816_32001800.jpeg" },
  { name: "Lausanne", img: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_380,h_360/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/st/images/places/lausanne-lt_www_diapo_28409.jpg" }
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const nextSlide = () => {
    if (currentIndex + cardsPerPage < places.length) {
      setCurrentIndex((prevIndex) => prevIndex + cardsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - cardsPerPage);
    }
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevSlide} disabled={currentIndex === 0}>
        ❮
      </button>

      <div className="cards-wrapper">
        <div className="cards-slider" style={{ transform: `translateX(-${(currentIndex / cardsPerPage) * 100}%)` }}>
          {places.map((place, index) => (
            <div key={index} className="card">
              <img src={place.img} alt={place.name} />
              <h3>{place.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide} disabled={currentIndex + cardsPerPage >= places.length}>
        ❯
      </button>
    </div>
  );
};

export default CardSlider;
