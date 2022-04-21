import React, { useState, useEffect } from "react";
import "./SubpageHome.scss";
import Navbar from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import Data from "../../asset/data";
import { useNavigate, useLocation } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const iconCard = [
  {
    nameclass: "fas fa-people-arrows",
    namecard: "Personalized Matching",
    theme:
      "Our unique matching system lets you find just the tour you want for your next holiday.",
  },
  {
    nameclass: "fas fa-hiking",
    namecard: "Wide Variety of Tours",
    theme:
      "We offer a wide variety of personally picked tours with destinations all over the globe.",
  },
  {
    nameclass: "fab fa-servicestack",
    namecard: "Highly Qualified Service",
    theme:
      "Our tour managers are qualified, skilled, and friendly to bring you the best service.",
  },
  {
    nameclass: "fas fa-money-bill-wave",
    namecard: "Best Price Guarantee",
    theme:
      "If you find tours that are cheaper than ours, we will compensate the difference.",
  },
  {
    nameclass: "fas fa-hotel",
    namecard: "Handpicked Hotels",
    theme:
      "Our team offers only the best selection of affordable and luxury hotels to our clients.",
  },
  {
    nameclass: "fas fa-headset",
    namecard: "24/7 support",
    theme:
      "You can always get professional support from our staff 24/7 and ask any question you have.",
  },
];

const SubpageHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("travel/")[1];
  const [data, setData] = useState([]);
  const [imgIntro, setImgIntro] = useState([]);
  const [imgIntro2, setImgIntro2] = useState([]);

  const movePageTicket=()=>{
    navigate(`travel/ticket/${id}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setImgIntro(Data[parseInt(id) - 1].imageItro);
    setImgIntro2(Data[parseInt(id) - 1].image2);
    setData(Data[parseInt(id) - 1]);
  }, []);
  
  return (
    <div>
      <Navbar />
      <div className="body-subpageHome">
        <div className="top-subpageHome">
          <div className="top-subpageHome-img">
            <img src={data.bg} alt="" />
          </div>
          <div className="top-subpageHome-text">
            <h2>{data.name}</h2>
            <p>{data.address}</p>
          </div>
          <div className="suppost-text-top">
            <p>
              {data.theme}
            </p>
          </div>
        </div>
        <h1>Discover New Horizons</h1>
        <div className="checkin-here">
          <div className="checkin-here-text">
            <h2>EXPLORE A DIFFERENT WAY TO TRAVEL</h2>
            <p>
              Discover new cultures and have a wonderful rest with Backpack
              Story! Select the country you’d like to visit and provide our
              agents with estimated time – they’ll find and offer the most
              suitable tours and hotels.
            </p>
            <br />
            <p>
              During our work we organized countless journeys for our clients.
              We started as a small tour bureau, and soon we expanded our offers
              list. Today we have valuable experience travelling and we can
              advise the most stunning resorts, cities and countries to visit!
            </p>
            <button
              onClick={() => {
                console.log(data.imageItro[0]);
              }}
            >
              READ MORE
            </button>
          </div>
          <div className="checkin-here-img">
            <div className="checkin-here-img1">
              <img src={imgIntro[0]} alt="" />
            </div>
            <div className="checkin-here-img2">
              <img src={imgIntro[1]} alt="" />
            </div>
            <div className="checkin-here-img3">
              <img src={imgIntro[2]} alt="" />
            </div>
          </div>
        </div>
        <div className="text-content-intro">
          <div className="text-intro-service">
            <h3>01. BEST HOTELS</h3>
            <p>
              We guarantee the best hotels and very comfortable rooms, which
              will be appreciated by every traveller. You will be absolutely
              happy with the hotel and will have a wonderful vacation there.
            </p>
          </div>
          <div className="text-intro-service">
            <h3>02. TOURIST GUIDE</h3>
            <p>
              We provide our clients with such a service as Tourist Guide. Its
              main goal is to ensure people with all necessary information any
              time he needs. This service is similar to Customer Support with
              emphasis on travelling.
            </p>
          </div>
          <div className="text-intro-service">
            <h3>03. FLIGHTS TICKETS</h3>
            <p>
              You can book tickets on any plane online via our booking system.
              Here you have an opportunity to select your transport operator.
              Our representatives will help you with the details.
            </p>
          </div>
        </div>
        <h1>Ilustration</h1>
        <div className="img-intro-subpageHome">
          <Masonry columnsCount={3} gutter="10px">
            <img src={imgIntro2[0]} alt="" />
            <img src={imgIntro2[1]} alt="" />
            <img src={imgIntro2[2]} alt="" />
            <img src={imgIntro2[3]} alt="" />
            <img src={imgIntro2[4]} alt="" />
            <img src={imgIntro2[5]} alt="" />
          </Masonry>
        </div>
        <h1>Our Services</h1>
        <div className="Services-subpagehome">
          {iconCard.map((item3) => (
            <div className="Services-subpagehome-card">
              <i class={item3.nameclass}></i>
              <h3>{item3.namecard}</h3>
              <p>
                {item3.theme}
              </p>
            </div>
          ))}
        </div>
        <button className="Datve" onClick={movePageTicket}>Đặt vé</button>
        
      </div>
      <Footer/>
    </div>
  );
};

export default SubpageHome;
