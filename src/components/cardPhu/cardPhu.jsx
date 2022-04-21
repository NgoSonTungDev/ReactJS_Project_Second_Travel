import React, { useEffect } from "react";
import "./cardPhu.scss";
import Aos from "aos";
import {useNavigate} from 'react-router-dom';

const CardPhu = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);

  const moveSubPageService = () =>{
    navigate(`/service/${item.id}`);
  }

  const item = props.travel;
  return (
    <div className="formcard" data-aos="fade-down" onClick={moveSubPageService}>
      <img src={item.introImg} alt="" />
      <div className="formcard-text">
        <h2>{item.Name}</h2>
        <br />
        <i>{item.introName2}</i>
      </div>
    </div>
  );
};

export default CardPhu;
