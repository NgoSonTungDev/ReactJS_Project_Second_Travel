import React, { useEffect, useState } from "react";
import "./subpageService.scss";
import { useLocation } from "react-router-dom";
import dataPhu from "../../asset/data2";
import Navbar from "../../components/menu/menu";
import Footer from "../../components/footer/footer";

const SubpageService = () => {
  const location = useLocation();
  const id = location.pathname.split("service/")[1];
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);


  useEffect(() => {
    window.scroll(0, 0);
    setData(dataPhu[parseInt(id) - 1]);
    setImg(dataPhu[parseInt(id) - 1].introImg2);

  }, []);

  return (
    <div>
      <Navbar />
      <div className="comtainer-subpageService">
        <div className="top-subpageService">
          <div className="top-subpageService-img">
            <img src={data.introImg} alt="" />
          </div>
          <div className="top-subpageService-text">
            <h1>{data.Name}</h1>
            <p>{data.introName2}</p>
          </div>
        </div>
        <div className="boby-subpageService">
          <div className="boby-subpageService-img">
            <img src={data.introImg} alt="" />
          </div>
          <div className="boby-subpageService-text">
            <h1>Traveler</h1>
            <div className="body-text-page">
              <div className="intro-text-page">
                <div className="intro-text-page-text">
                  <p>
                    Become a traveler around the world with our help. In this
                    web you can find the best option for your trip, the best
                    places to visit and the most impressive images that you will
                    see come true.
                  </p>
                </div>
                <div className="intro-text-page-text">
                  <img
                    src="https://ae01.alicdn.com/kf/H9d6493beacd3499d89d69d4fe250c711n/Tem-D-n-Xe-H-i-C-T-nh-NSWE-La-B-n-Gi-Hoa-H.jpg_640x640.jpg"
                    alt=""
                  />
                </div>
                <div className="intro-text-page-text">
                  <p>
                    To start, choose your destination and find all the
                    information about it: Customs, places to visit, secrets of
                    each location, best restaurants, shows ... And an endless
                    number of curiosities!
                  </p>
                </div>
              </div>
              <div className="intro-text-page-img">
                <div className="intro-text-page-img1">
                  <img
                    src={img[0]}
                    alt=""
                  />
                </div>
                <div className="intro-text-page-img1 support">
                  <img
                    src={img[1]}
                    alt=""
                  />
                </div>
                <div className="intro-text-page-img1">
                  <img
                    src={img[2]}
                    alt=""
                  />
                </div>
              </div>
              <div className="infor-end">
                <p>Discover</p>
                <h5>
                  Don't know where to travel? Do you want to know the most
                  incredible places in the world?
                </h5>
                <h5>
                  Here we show you a guide of some places highlighted by our
                  travelers.
                </h5>
                <div className="infor-end-img">
                  <p>
                    "We couldn't have asked a better guide. This truly was the
                    adventure of a lifetime"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubpageService;
