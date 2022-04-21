import React from "react";
import "./card.scss";
import { useNavigate, Link } from "react-router-dom";

const CardChinh = (props) => {
  const item = props.CardDemo;
  
  const navigate = useNavigate();
  const currentEmail = localStorage.getItem("emailDangNhap");

  const moveSuppageHome = () => {
    navigate(`/travel/${item.id}`);
  };
  const movePageTicket = () => {
    navigate(`/travel/${item.id}/travel/ticket/${item.id}`);
  };

  return (
    <div className="card-chinh-intro">
      <div className="card-chinh-intro-img">
        <img src={item.image} alt="" />
      </div>
      <div className="card-chinh-intro">
        <div className="name-card">
          <p>{item.name}</p>
        </div>
        <div className="card-chinh-intro-icon">
          <i class="fas fa-map-marker-alt"></i>
          <p>{item.address}</p>
        </div>
        <div className="card-chinh-intro-icon">
          <i class="fas fa-chart-area"></i>
          <p>{item.domain}</p>
        </div>
        <div className="card-chinh-intro-icon">
          <i class="fas fa-globe-africa"></i>
          <p>{item.nation}</p>
        </div>
        <div className="card-chinh-intro-icon">
          <i class="fas fa-dollar-sign"></i>
          <p className="price">{item.price} </p> (VND/Nguoi)
        </div>
      </div>
      {currentEmail ? (
        <div className="button-cardChinh">
          <button className="btn-Xem" onClick={moveSuppageHome}>
            Xem Chi Tiết
          </button>
          <button className="btn-Dat" onClick={movePageTicket}>
            Đặt Ngay
          </button>
        </div>
      ) : (
        <Link to="/login">
          <div className="button-cardChinh">
            <button className="btn-dn">Đăng nhập</button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default CardChinh;
