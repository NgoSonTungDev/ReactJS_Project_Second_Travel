import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "./destination.scss";
import { Pagination, Modal, Button, Image } from "semantic-ui-react";
import Navbar from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import video from "./video.mp4";

const dataCard = [
  {
    img: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Mountain",
  },
  {
    img: "https://images.pexels.com/photos/4601159/pexels-photo-4601159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Sea",
  },
  {
    img: "https://images.pexels.com/photos/8221746/pexels-photo-8221746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Checkin",
  },
  {
    img: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Resort",
  },
  {
    img: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Boat",
  },
  {
    img: "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Island",
  },
  {
    img: "https://images.pexels.com/photos/1310788/pexels-photo-1310788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Temple",
  },
  {
    img: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Camping",
  },
];

const iconCard = [
  {
    nameclass: "fas fa-globe-americas",
    namecard: "Worldwide",
  },
  {
    nameclass: "fas fa-hiking",
    namecard: "Adventures",
  },
  {
    nameclass: "fas fa-utensils",
    namecard: "Food & drinks",
  },
  {
    nameclass: "fas fa-hotel",
    namecard: "Affordable hotels",
  },
  {
    nameclass: "fas fa-wallet",
    namecard: "Affordable price",
  },
  {
    nameclass: "fas fa-headset",
    namecard: "24/7 support",
  },
];

const imgIntro = [
  {
    imgAdress:
      "https://images.unsplash.com/photo-1531168556467-80aace0d0144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    nameAdress: "Iceland",
  },
  {
    imgAdress:
      "https://media.istockphoto.com/photos/woman-dives-in-tropical-sea-idyllic-island-picture-id1289683490?b=1&k=20&m=1289683490&s=170667a&w=0&h=A4-zOsGTUrc6ypzMWykx_YYDqYV1ifg5176K8CRvwPc=",
    nameAdress: "Thailand",
  },
  {
    imgAdress:
      "https://images.pexels.com/photos/1553961/pexels-photo-1553961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    nameAdress: "Iceland",
  },
  {
    imgAdress:
      "https://images.unsplash.com/photo-1604916010805-18ea15fa6d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW5sYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    nameAdress: "Greenland",
  },
  {
    imgAdress:
      "https://images.unsplash.com/photo-1551620832-e2af54f6f0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    nameAdress: "Brazil",
  },
  {
    imgAdress:
      "https://media.istockphoto.com/photos/spire-cove-picture-id1309140666?b=1&k=20&m=1309140666&s=170667a&w=0&h=3XV7byzsCPRqDxCmcgu9VBmJod9XvqKirWgd5D-IVCo=",
    nameAdress: "Alaska",
  },
  {
    imgAdress:
      "https://images.pexels.com/photos/6451234/pexels-photo-6451234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    nameAdress: "Alaska",
  },
  {
    imgAdress:
      "https://media.istockphoto.com/photos/woman-relaxing-in-luxury-hotel-in-the-maldives-picture-id1298305536?b=1&k=20&m=1298305536&s=170667a&w=0&h=ndxBF_7bESAguY98NjG6s4TtKMBpt1EGLZDqB5uPbU8=",
    nameAdress: "Maldive",
  },
  {
    imgAdress:
      "https://images.pexels.com/photos/9470482/pexels-photo-9470482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    nameAdress: "Maldive",
  },
];

const dataCard2 = [
  {
    img: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    mantras: "Life Is A Journey, Not A Destination",
    date: "26/11/2021",
  },
  {
    img: "https://media.istockphoto.com/photos/mature-couple-hike-above-lake-lugano-in-the-morning-picture-id1292251389?b=1&k=20&m=1292251389&s=170667a&w=0&h=oqgL9rLyvKe6ifecSng8QXWlzXOiNTTrewU92ecnmEc=",
    mantras: "live life to the fullest",
    date: "28/11/2021",
  },
  {
    img: "https://images.unsplash.com/photo-1624821558130-b325d7946fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbGxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    mantras: "Life is about experiences",
    date: "30/11/2021",
  },
];

const Destination = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <Navbar />
      <div className="container-destination">
        <div className="top-destination">
          <div className="top-destination-img">
            <img
              src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="top-destination-text">
            <h1>Unique experiences for discerning travelers</h1>
            <p>
              Discover the abundant culture that awaits outside of Japan’s big
              cities through unique experiences crafted for you by world-leading
              airline group ANA ’s ODYSSEY JAPAN.{" "}
            </p>
          </div>
        </div>
        <h2>enjoy the trip</h2>
        <div className="body-video-destination">
          <div className="body-video-destination-slide">
            <AwesomeSlider>
              <div>
                <video
                  autoPlay={true}
                  loop
                  muted
                  src="https://player.vimeo.com/external/441779777.sd.mp4?s=d11b857547eb68e1d59e775faed1e941b1980964&profile_id=139&oauth2_token_id=57447761"
                ></video>
              </div>
              <div>
                <video
                  autoPlay={true}
                  loop
                  muted
                  src="https://player.vimeo.com/external/398677566.sd.mp4?s=462a5e57cf2634b71feeb66a566cd6bd234b7d51&profile_id=139&oauth2_token_id=57447761"
                ></video>
              </div>
              <div>
                <video
                  autoPlay={true}
                  loop
                  muted
                  src="https://player.vimeo.com/external/449787605.sd.mp4?s=ce5ced4e5c57e8de16eb2dc460b740bf9797a97b&profile_id=139&oauth2_token_id=57447761"
                ></video>
              </div>
            </AwesomeSlider>
          </div>
          <div className="body-video-destination-text">
            <h5>Why Choose Us?</h5>
            <h3>Nature's Majesty Awaits You</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Unde
              Fugit Repellat Error Deserunt Nam Aperiam Odit Libero Quos
              Provident. Nostrum?
            </p>
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
        <h2>Make Yours Destination</h2>
        <div className="body-card-destination">
          {dataCard.map((item) => (
            <div className="card-destination" onClick={() => {
              setOpen(true);
            }}>
              <div className="card-destination-img">
                <img src={item.img} alt="" />
              </div>
              <div className="card-destination-test">
                <h3>{item.name}</h3>
                <p>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing.</p>
                <a href="#" >
                  read more <i class="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <h2>Countless Expericences</h2>
        <div className="card-icon-destination">
          {iconCard.map((item2) => (
            <div className="icon-destination-card" >
              <i class={item2.nameclass}></i>
              <p>{item2.namecard}</p>
              <h5>
                Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
                Numquam, Cumque.
              </h5>
            </div>
          ))}
        </div>
        <h2>We Record Memories</h2>
        <div className="img-intro-adress">
          <Masonry columnsCount={3} gutter="10px">
            {imgIntro.map((item3) => (
              <div className="intro-img-destination">
                <img src={item3.imgAdress} alt="" />
                <p>Travel Spot</p>
                <h5>{item3.nameAdress}</h5>
              </div>
            ))}
          </Masonry>
        </div>
        <h2>We Untold Stories</h2>
        <div className="container2-adestination">
          <div className="card-in-container2-adestination">
            <div className="card2-demo-container2">
              {dataCard2.map((item4) => (
                <div className="container-card2-itro-adestination" onClick={() => {
                  setOpen(true);
                }}>
                  <div className="container-card2-itro-adestination-img">
                    <img src={item4.img} alt="" />
                  </div>
                  <div className="container-card2-itro-adestination-text">
                    <h5>{item4.mantras}</h5>
                    <p>
                      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                      Pariatur, Natus!
                    </p>
                    <div class="icon">
                      <a href="#">
                        <i class="fas fa-clock"></i> {item4.date}
                      </a>
                      <a
                        href="https://www.facebook.com/sontung0309/"
                        target="_blank"
                      >
                        <i class="fas fa-user"></i> by admin
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="bannerDestination">
            <div class="contentDestination">
              <span>start your adventures</span>
              <h3>Let's Explore This World</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptatum praesentium amet quibusdam quam officia suscipit
                odio.
              </p>
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        className="modelthongbaoDestination"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>
          {" "}
          <p className="information-madelDestination">Information From Tungcoder</p>{" "}
        </Modal.Header>
        <Modal.Content>
          <div className="contentModelDestination">
            <div className="contentModel-textDestination">
              <h3>
                Chưa handle nghe ^^ Ngắm gái nghe nhạc đi hồi handel
                sau hihi @@
              </h3>
            </div>

            <video autoPlay={true} loop className="modelVideoDestination">
              <source src={video} />
            </video>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
export default Destination;
