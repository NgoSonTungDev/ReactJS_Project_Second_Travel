import React, { useEffect } from "react";
import "./about.scss";
import Navbar from "../../components/menu/menu";
import { Carousel } from "3d-react-carousal";
import Footer from "../../components/footer/footer";


let slides = [
  <img
    src="https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="1"
  />,
  <img
    src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="2"
  />,
  <img
    src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="3"
  />,
  <img
    src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="4"
  />,
  <img
    src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="5"
  />,
];

const About = () => {

  useEffect(async () => {
    window.scrollTo(0, 0);
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    text1.addEventListener("mouseover", function () {
      text1.style.opacity = "1";
      text2.style.opacity = "0.4";
      text3.style.opacity = "0.4";
      img1.style.display = "block";
      img2.style.display = "none";
      img3.style.display = "none";
    });
    text2.addEventListener("mouseover", function () {
      text2.style.opacity = "1";
      text1.style.opacity = "0.4";
      text3.style.opacity = "0.4";
      img2.style.display = "block";
      img1.style.display = "none";
      img3.style.display = "none";
    });
    text3.addEventListener("mouseover", function () {
      text2.style.opacity = "0.4";
      text3.style.opacity = "1";
      text1.style.opacity = "0.4";
      img3.style.display = "block";
      img2.style.display = "none";
      img1.style.display = "none";
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="containerAbout">
        <div className="Carousel">
          <Carousel slides={slides} interval={1000} />
        </div>
        <div className="textAbout">
          <div className="textAbout1" >
            <h3>Vehicles made for the planet.</h3>
          </div>
          <div className="textAbout2" >
            <p>
              Whether it’s taking families on new adventures or helping fleets
              electrify at scale, our vehicles all share a common goal —
              preserving the natural world for generations to come.
            </p>
          </div>
        </div>
        <div className="imgAbout">
          <div className="imgAbout1">
            <img
              src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="imgAbout2">
            <img
              src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
        </div>
        <div className="videoAbout">
          <h2>OUR CONTRIBUTION TO THE PLANET</h2>
          <video className="videobg" muted loop autoPlay={true}>
            <source src="https://player.vimeo.com/external/406568164.hd.mp4?s=e4db568d7ccf71c87c63fb38ee1848280072bb71&profile_id=172&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </div>
        <div className="travelAbout">
          <div className="travelAbout-img">
            <img
              src="https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <h2>Spaces</h2>Building places to gather.
          </div>
          <div className="travelAbout-img2">
            <div className="travelAbout-img2-1" >
              <img
                src="https://images.pexels.com/photos/8241135/pexels-photo-8241135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <h2>Membership</h2>Connect and enjoy benefits
            </div>
            <div className="travelAbout-img2-2" >
              <img
                src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <h2>Gear Shop</h2>Goods for you and your vehicle.
            </div>
          </div>
        </div>
        <div className="big-img">
          <img
            src="https://images.pexels.com/photos/5288746/pexels-photo-5288746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div className="hove-animation-img">
          <div className="hove-animation-img-text">
            <h1>Latest stories</h1>
            <div className="item-hover">
              <div className="item-hover-text">
                <h2>01</h2>
                <p id="text1">A space to gather</p>
              </div>
              <div className="item-hover-text2">
                <h2>02</h2>
                <p id="text2">Electrifying The TransAmerica Trail</p>
              </div>
              <div className="item-hover-text3">
                <h2>03</h2>
                <p id="text3">Protecting what we love</p>
              </div>
            </div>
          </div>
          <div className="hove-animation-img-image">
            <img
              id="img1"
              className="hove-animation-img1"
              src="https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <img
              id="img2"
              className="hove-animation-img2"
              src="https://images.pexels.com/photos/3214968/pexels-photo-3214968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <img
              id="img3"
              className="hove-animation-img3"
              src="https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
        </div>
        <div className="end">
          <p>The end</p>
          <hr width="100%" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
