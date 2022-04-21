import React, { useEffect, useState } from "react";
import "./review.scss";
import Navbar from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import { Pagination, Modal, Button, Image } from "semantic-ui-react";
import nen1 from "./bg1.jpg";
import nen2 from "./bg2.jpg";
import nen3 from "./bg3.jpg";
import video from "./video.mp4";

import { Carousel } from "react-bootstrap";

const cardIntro = [
  {
    img: "https://images.pexels.com/photos/6142739/pexels-photo-6142739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ",
    itroName: "Bungee Jump",
  },
  {
    img: "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    itroName: "Zip Lines",
  },
  {
    img: "https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ",
    itroName: "Canoeing",
  },
  {
    img: "https://images.pexels.com/photos/7602068/pexels-photo-7602068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    itroName: "Canoeing",
  },
];
const cardDemo = [
  {
    img: "https://media.istockphoto.com/photos/woman-rowing-a-canoe-boat-on-lake-during-sunset-picture-id1297410941?b=1&k=20&m=1297410941&s=170667a&w=0&h=djmySfZrUlbidrwu9maMQRFuZVLD8TinFUYWmwesBUE=",
    name: "Boat tour package",
    price: "200$-350$ ",
  },
  {
    img: "https://media.istockphoto.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507204606?b=1&k=20&m=507204606&s=170667a&w=0&h=AjtTkA7ZTsxfGbg-hkKcvQKBpxcJGk14bns-5MzBwC4=",
    name: "Mountain climbing tour package",
    price: "400$-800$",
  },
  {
    img: "https://media.istockphoto.com/photos/young-woman-walks-towards-beautiful-beach-picture-id1311063862?b=1&k=20&m=1311063862&s=170667a&w=0&h=ai-8qth6hlECiFoQR4g9Wt1cZHdrvsCsSAnyzGP2d3E=",
    name: "Island tour package",
    price: "900$-1300$",
  },
  {
    img: "https://media.istockphoto.com/photos/windsurfing-picture-id493919335?b=1&k=20&m=493919335&s=170667a&w=0&h=yvZoijqTqzAwrZhC7WnpFTynCwbIF8EZ_9KaZcdpL2I=",
    name: "Surfing travel experience",
    price: "250$-480$",
  },
  {
    img: "https://media.istockphoto.com/photos/snow-biking-couple-picture-id525670203?b=1&k=20&m=525670203&s=170667a&w=0&h=q5Q9p1fQExGeVsC489cqu9WYDnluiL-dSzvspWZqUYs=",
    name: "experience traveling by bicycle",
    price: "120$-249$",
  },
  {
    img: "https://media.istockphoto.com/photos/motorcycle-driver-riding-in-dolomite-pass-italy-europe-picture-id1171675830?b=1&k=20&m=1171675830&s=170667a&w=0&h=7QpGi3S20wZfVJiv4zKvwyYZcldwG-h7cfrLtMZXvYs=",
    name: "experience traveling by motorbike",
    price: "260$-519$",
  },
  {
    img: "https://media.istockphoto.com/photos/icefields-parkway-adventure-canadian-rockies-alberta-canada-picture-id1279199341?b=1&k=20&m=1279199341&s=170667a&w=0&h=1myQbSOdh1zPR2BPIfE_serBQWrAyu_o_OTKNeZNRUc=",
    name: "travel experience by car",
    price: "1200$-3000$",
  },
  {
    img: "https://media.istockphoto.com/photos/colorful-hot-air-balloon-flying-above-the-clouds-picture-id1282443951?b=1&k=20&m=1282443951&s=170667a&w=0&h=OkjWgjLFyh3zbsA5oT-s0Lgp9nOAuhhE2nxpJTkhccM=",
    name: "Hot air balloon travel experience",
    price: "2500$-6000$",
  },
  {
    img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW5lcyUyMHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Air travel experience",
    price: "15000$-30000$",
  },
];


const Review = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scroll(0,0);
  });
  return (
    <div>
      <Navbar />
      <div className="containerReview">
        <Carousel fade className="slide">
          <Carousel.Item>
            <img className="d-block w-100" src={nen1} alt="First slide" />
            <Carousel.Caption className="textslide">
              <span>Never Stop</span>
              <h3>exploring</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                unde ex molestias soluta consequatur saepe aliquam, excepturi
                delectus consequuntur minus!
              </p>
              <a href="#" class="btn">
                get started
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={nen2} alt="Second slide" />
            <Carousel.Caption className="textslide2">
              <span>Make Tour</span>
              <h3>amazing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                unde ex molestias soluta consequatur saepe aliquam, excepturi
                delectus consequuntur minus!
              </p>
              <a href="#" class="btn">
                get started
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={nen3} alt="Third slide" />

            <Carousel.Caption className="textslide">
              <span>Explore The</span>
              <h3>new world</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                unde ex molestias soluta consequatur saepe aliquam, excepturi
                delectus consequuntur minus!
              </p>
              <a href="#" class="btn">
                get started
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="review-card">
          <h1>Adventure Idea!</h1>
          <div className="form-card">
            {cardIntro.map((item2) => (
              <div className="card-intro">
                <div className="card-intro-img">
                  <img src={item2.img} alt="" />
                </div>
                <div className="conten-card">
                  <h3>{item2.itroName}</h3>
                  <p>
                    Lorem ipsum dolor sit amet , adipisicing elit. Laborum, id.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="body2-intro_review">
          <div className="body2-intro_review_img">
            <img
              src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="body2-intro_review_content">
            <h3>Memorable Outdoor Experiences</h3>
            <br />
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Neque
              Voluptates Corrupti Natus Necessitatibus Beatae Voluptatibus,
              Deserunt Quo Soluta Minima Libero Laborum, Corporis Error Esse
              Vitae Placeat Blanditiis Reiciendis Vel? Minima.
            </p>
            <br />
            <p className=".text-review">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Provident
              Dicta Doloremque Placeat Porro, Ipsam Quia At Beatae Atque Odit
              Iste?
            </p>
            <button  onClick={() => {
                    setOpen(true);
                  }}>READ MORE</button>
          </div>
        </div>

        <div className="card-Demo-Travel">
          <div className="text-intro-card">
            <h1>Popular Packages</h1>
          </div>

          <div className="card-intro-packages">
            {cardDemo.map((item3) => (
              <div className="card-review-travel">
                <div className="card-review-travel-img">
                  <img src={item3.img} alt="" />
                </div>
                <h2>{item3.name}</h2>
                <p>
                  Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
                  Numquam, Eos.
                </p>
                <h4>{item3.price}</h4>
                <button  onClick={() => {
                    setOpen(true);
                  }}>EXplore now</button>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          defaultActivePage={5}
          totalPages={10}
          className="pagination"
        />

        <div className="newsletter">
          <div class="content">
            <h1 class="heading">subscirbe now!</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam ipsam repellat nostrum esse officiis unde quisquam
              corporis doloremque adipisci similique!
            </p>
            <div className="form-email">
              <input
                type="email"
                name=""
                placeholder="enter your email"
                id=""
                class="email"
              />
              <input type="submit" value="subscirbe" class="btn" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        className="modelthongbao"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header> <p className="information-madel">Information From Tungcoder</p> </Modal.Header>
        <Modal.Content>
          <div className="contentModel">
            <div className="contentModel-text">
              <h3>
                Cái này tui chưa handle nghe ^^ Ngắm gái nghe nhạc đi hồi handel sau
                 hihi @@
              </h3>
            </div>

            <video autoPlay={true}  loop className="modelVideo">
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
export default Review;
