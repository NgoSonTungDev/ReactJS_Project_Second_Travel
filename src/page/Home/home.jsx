import React, { useState, useEffect } from "react";
import "./home.scss";
import Navbar from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import Data from "../../asset/data";
import CardChinh from "../../components/card/card";
import Carousel from "react-multi-carousel";
import { Pagination, Modal, Button } from "semantic-ui-react";
import Aos from "aos";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const cardNation = [
  {
    img: "https://truyenthongtre.vn/Files/Image/2021/04/25/thumb_580_co-trong-gi-1619340812158.png",
    name: "Việt nam",
  },
  {
    img: "https://www.thoughtco.com/thmb/y8SOIwWb0zhHBr70tFO373ZFKlk=/1333x1000/smart/filters:no_upscale()/national-flag-canada-lge2-56a0e57f5f9b58eba4b4f422.jpg",
    name: "Canada",
  },
  {
    img: "https://xkld.thanhgiang.com.vn/wp-content/uploads/2020/08/quoc-ky-nhat-ban.jpg",
    name: "Nhật Bản",
  },
  {
    img: "https://dongphucsongphu.com/co-viet-nam-va-co-trung-quoc-2.jpg",
    name: "Trung Quốc",
  },
  {
    name: "MỸ",
    img: "https://vietjet.net/includes/uploads/2017/10/quoc-ky-my-600x413.jpg",
  },
  {
    name: "Hà Lan",
    img: "https://cotcoinox.net/contents_tinta/images/la-co-ha-lan-may-theo-kich-thuoc-gia-re-khu-vuc-hcm.jpg",
  },
  {
    img: "https://media.ohay.tv/v1/upload/content/2017-12/26/28967-12ded3f078285ddca64c482cb0732e30-ohaytv.jpg",
    name: "Hàn Quốc",
  },
  {
    img: " https://image.freepik.com/free-photo/flag-russia-flutters-against-blue-sky_73101-531.jpg",
    name: "Nga",
  },
];

const imgCarousel = [
  {
    img: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1533850595620-7b1711221751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    img: "https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI=",
  },
  {
    img: "https://images.pexels.com/photos/5043948/pexels-photo-5043948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    img: "https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    img: "https://images.pexels.com/photos/3889991/pexels-photo-3889991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    img: "https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    img: "https://images.pexels.com/photos/5717750/pexels-photo-5717750.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [domain, setDomain] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setData(Data);
  }, []);

  const onSubmitSearch = () => {
    setData(
      Data.filter((item) =>
        item?.name?.toLowerCase()?.includes(search.toLowerCase())
      )
    );
  };

  const filterByDomain = (e) => {
    setDomain(e.target.value);
    setData(
      Data.filter((item) =>
        item?.domain?.toLowerCase()?.includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Navbar />
      <div className="bodyHome">
        <div className="top-home">
          <div className="top-home-img">
            <div className="top-home-img-content">
              <div className="top-home-text">
                <p className="follow" data-aos="fade-up" data-aos-delay="300">Follow Us</p>
                <h3 data-aos="fade-up" data-aos-delay="400">To The Unknown</h3>
                <p data-aos="fade-up" data-aos-delay="500">
                  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                  Necessitatibus Quia Illum Quod Perspiciatis Harum In Possimus?
                  Totam Consequuntur Officia Quia?
                </p>
                <button data-aos="fade-up" data-aos-delay="600" >READ MORE</button>
              </div>
            </div>
          </div>
          <div className="top-form-find">
            <div className="top-form-find-text" data-aos="fade-up" data-aos-delay="400">
              <p>Quốc Gia</p>
              <p>Miền/Vùng</p>
              <p>Tìm Kiếm</p>
            </div>
            <div className="top-form-find-form">
              <select className="select-find"  data-aos="fade-up" data-aos-delay="5400">
                <option value="">ALL</option>
                <option value="">Việt Nam</option>
                <option value="">Japan</option>
                <option value="">Singopo</option>
                <option value="">Hi Lạp</option>
                <option value="">USA</option>
              </select>
              <select
               data-aos="fade-up" data-aos-delay="500"
                className="select-find findSelect2"
                value={domain}
                onChange={filterByDomain}
              >
                <option value="">ALL</option>
                <option value="Miền Nam">Miền Nam</option>
                <option value="Miền Bắc">Miền Bắc</option>
                <option value="Miền Trung">Miền Trung</option>
                <option value="Miền Tây">Miền Tây</option>
              </select>

              <input
               data-aos="fade-up" data-aos-delay="600"
                type="text"
                placeholder="Seach...."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button 
               data-aos="fade-up" data-aos-delay="800"
              onClick={onSubmitSearch}>Find now</button>
            </div>
          </div>
        </div>
        <h2>ODYSSEY HIGHLIGHTS</h2>
        <div className="body-home-card">
          {data.map((item) => (
            <CardChinh CardDemo={item} />
          ))}
          <Pagination
          defaultActivePage={5}
          totalPages={10}
          className="pagination"
        />
        </div>
        <h2>NATIONS</h2>
        <div className="nation-home">
          {cardNation.map((item2) => (
            <div className="nation-home-card">
              <div className="nation-home-card-img">
                <img src={item2.img} alt="" />
              </div>
              <div className="nation-home-card-text">
                <p>{item2.name}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>Gallery</h2>
        <div className="home-carousel">
          <Carousel responsive={responsive}>
            {imgCarousel.map((item3) => (
              <div>
                <img src={item3.img} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <h2>How to Get Away</h2>
        <div className="bannerHome">
          <div className="bannerHome-footer">
            <div className="bannerHome-footer-text">
              <div class="contenHome-footer">
                <h3>Look Out for ME</h3>
                <p>
                  Take care of the land. Take care of yourself. Here's how we
                  can all do our part to protect Maine's natural resources for
                  generations to come.
                </p>
                <button>READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-email-home">
          <div className="form-email-home-footer">
            <h5>Subscribe to my newsletter</h5>
            <p>All the stuff in your inbox that makes you want to go out.</p>
            <div className="form-input-email-home-footter">
              <input type="email" placeholder="Enter Email" />
              <button>Signup</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
