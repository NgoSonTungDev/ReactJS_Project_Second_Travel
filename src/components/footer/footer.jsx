import React from "react";
import "./footer.scss";

const anhiconne = [
  "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
  "https://cdn-icons-png.flaticon.com/128/1384/1384053.png",
  "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
  "https://cdn-icons-png.flaticon.com/128/2111/2111450.png",
  "https://stc-zaloprofile.zdn.vn/pc/v1/images/zalo_sharelogo.png",
];

const Footer = () => {
  return (
    <div className="footer">
      <div class="box-container">
        <div class="box">
          <h3>quick links</h3>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#shop">shop</a>
          <a href="#packages">packages</a>
          <a href="#reviews">reviews</a>
          <a href="#blogs">blogs</a>
        </div>

        <div class="box">
          <h3>extra links</h3>
          <a href="#">my account</a>
          <a href="#">my order</a>
          <a href="#">my wishlist</a>
          <a href="#">ask questions</a>
          <a href="#">terms of use</a>
          <a href="#">privacy policy</a>
        </div>

        <div class="box">
          <h3>contact info</h3>
          <a href="#">
            {" "}
            <i class="fas fa-phone"></i> +0522564268{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fas fa-phone"></i> +0386762927{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fas fa-envelope"></i> sontungk69@gmail.com{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fas fa-map"></i> K264 - Điện Biên Phủ{" "}
          </a>
        </div>

        <div class="box">
          <h3>follow us</h3>
          <a href="https://www.facebook.com/sontung0309/" target="_blank">
            {" "}
            <i class="fab fa-facebook-f" ></i> facebook{" "}
          </a>
          <a href="https://www.facebook.com/sontung0309/" target="_blank">
            {" "}
            <i class="fab fa-twitter"></i> twitter{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fab fa-instagram"></i> instagram{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fab fa-linkedin"></i> linkedin{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fab fa-github"></i> github{" "}
          </a>
        </div>
      </div>

      <div class="credit">
        Design by <span >Son Tung </span> 
      </div>
    </div>
  );
};

export default Footer;
