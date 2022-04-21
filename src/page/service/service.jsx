import React, { useEffect, useState } from "react";
import "./service.scss";
import dataPhu from "../../asset/data2";
import CardPhu from "../../components/cardPhu/cardPhu";
import Navbar from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import Aos from "aos";
import video from "./video.mp4";
import { Pagination, Modal, Button } from "semantic-ui-react";

const Service = () => {
  Aos.init({ duration: 1200 });
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [introName, setIntroName] = useState("");
  const [img2, setImg2] = useState("");
  const [name2, setName2] = useState("");
  const [introName2, setIntroName2] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setData(dataPhu);
    dataPhu.find(function (post, index) {
      if (post.id === 1) {
        setImg(post.introImg);
        setIntroName(post.introName2);
        setName(post.Name);
      }
      if (post.id === 2) {
        setImg2(post.introImg);
        setIntroName2(post.introName2);
        setName2(post.Name);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="containerService">
        <div className="serviceTraler">
          <div className="Service1" data-aos="fade-right"></div>
          <div className="Service2">
            <div className="Service2-text">
              <h5 data-aos="fade-up-left">A SPACE TO GATHER</h5>
              <p data-aos="fade-up-left">The opening of our first Hub.</p>
              <p className="Service2-text2" data-aos="fade-up-left">
                September 2021 marked an important milestone for Rivian when the
                first production R1T rolled off the line in Normal, IL, to the
                cheers of hundreds of employees who had contributed to its
                launch. This week marked another milestone for us. This time,
                cheers filled a sunny courty...
              </p>
            </div>
            <button
              data-aos="fade-up-left"
              onClick={() => {
                setOpen(true);
              }}
            >
              {" "}
              Read full story
            </button>
          </div>
        </div>
        <div className="card-service">
          <div
            className="card-service1"
            data-aos="fade-right"
            onClick={() => {
              setOpen(true);
            }}
          >
            <img src={img} alt="" />
            <div className="formcard-text">
              <h2>{name}</h2>
              <br />
              <i>{introName}</i>
            </div>
          </div>
          <div
            className="card-service2"
            data-aos="fade-left"
            onClick={() => {
              setOpen(true);
            }}
          >
            <img src={img2} alt="" />
            <div className="formcard-text">
              <h2>{name2}</h2>
              <br />
              <i>{introName2}</i>
            </div>
          </div>
        </div>
        <div className="body-Service">
          {data
            .filter((x) => x.id !== 1 && x.id !== 2)
            .map((item) => (
              <CardPhu travel={item}  />
            ))}
        </div>
        <Pagination
          defaultActivePage={5}
          totalPages={10}
          className="pagination"
        />
      </div>
      <Footer />
      <Modal
        className="modelthongbao"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Information From Tungcoder</Modal.Header>
        <Modal.Content>
          <div className="contentModel">
            <div className="contentModel-text">
              <h3>
                Cái này tui chưa handle nghe ^^ Ngắm gái đở đi rồi bấm máy cái Card ở dưới kìa
                hihi @@
              </h3>
            </div>

            <video autoPlay={true} loop className="modelVideo">
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

export default Service;
