import React, { useEffect, useState } from "react";
import "./ticket.scss";
import Navbar from "../../components/menu/menu";
import Data from "../../asset/data";
import { useLocation, useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import video from "./video.mp4";
import { Button, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

const Ticket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("travel/ticket/")[1];
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);
  const currentEmail = localStorage.getItem("emailDangNhap");

  useEffect(() => {
    setData(Data[parseInt(id) - 1]);
  }, []);

  const handleChange = (e, field) => {
    if (field === "name") {
      setName(e.target.value);
    }
    if (field === "sdt") {
      setPhone(e.target.value);
    }
    if (field === "email") {
      setEmail(e.target.value);
    }
  };

  const onChangeQuantity = (method) => {
    if (method === "plus") {
      setQuantity(quantity + 1);
    } else if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = () => {
    if (name === "" || date === "" || phone === "") {
      alert("Yêu cầu nhập đầy đủ thông tin !!!");
    } else {
      setOpenDialog(true);
    }
  };

  const priceTicket = data.price * quantity;

  return (
    <div>
      <Navbar />
      <div className="container-ticket">
        <div className="container-ticket-form">
          <h2>Thông Tin Chuyến Đi</h2>
          <div className="form-ticket">
            <div className="googlemap">
              <iframe
                src={data.googlemap}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="form-rigister-ticket">
              <div className="form-text-ticket">
                <p>
                  Địa điểm : {data.name} - {data.address} - {data.domain} -{" "}
                  {data.nation}
                </p>
              </div>
              <div className="form-text-ticket">
                <p>Giá chuyến đi : {data.price} (VNĐ/Người) </p>
              </div>
              <div className="form-text-ticket">
                <p>Họ tên Khách hàng đăng kí : </p>{" "}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    handleChange(e, "name");
                  }}
                  placeholder="Họ và tên"
                />
              </div>
              <div className="form-text-ticket">
                <p>Số lượng hành khách : </p>
                <div className="buton-quantity">
                  <button onClick={() => onChangeQuantity("minus")}>-</button>
                  <input type="number" value={quantity} />
                  <button onClick={() => onChangeQuantity("plus")}>+</button>
                </div>
              </div>
              <div className="form-text-ticket">
                <p>Số điện thoại : </p>{" "}
                <input
                  value={phone}
                  onChange={(e) => {
                    handleChange(e, "sdt");
                  }}
                  type="number"
                  placeholder="Số điện thoại"
                  className="sdt"
                />
              </div>
              <div className="form-text-ticket">
                <p>Email : </p>{" "}
                {currentEmail ? (
                  <p className="emailKH">{currentEmail}</p>
                ) : (
                  <input
                    type="email"
                    placeholder="Email "
                    value={email}
                    onChange={(e) => {
                      handleChange(e, "email");
                    }}
                    className="email"
                  />
                )}
              </div>
              <div className="form-text-ticket">
                <p>Thời gian khơi hành : </p>{" "}
                <Flatpickr
                  className="date"
                  data-enable-time
                  value={date}
                  onChange={(e) => {
                    setDate(e);
                  }}
                />
              </div>
              <div className="form-text-ticket">
                <p>Tổng tiền : {priceTicket} (VNĐ)</p>
              </div>
              <div className="form-text-ticket">
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                  className="booking"
                >
                  Đặt vé
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="modelthongbao2"
        onClose={() => setOpenDialog(false)}
        onOpen={() => setOpenDialog(true)}
        open={openDialog}
      >
        <Modal.Header>
          {" "}
          <p className="information-madel2">THÔNG BÁO !!!</p>{" "}
        </Modal.Header>
        <Modal.Content>
          <div className="contentModel-text2">
            <p>Bạn chắt chắn muốn đặt ?</p>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button color="green" onClick={() => setOpenDialog2(true)}>
            Okay
          </Button>
        </Modal.Actions>
      </Modal>
      <Modal
        className="modelthongbao4"
        onClose={() => setOpenDialog2(false)}
        onOpen={() => setOpenDialog2(true)}
        open={openDialog2}
      >
        <Modal.Header>
          {" "}
          <p className="information-madel4">
            Đặt vé thành công nhé hihi @@{" "}
          </p>{" "}
        </Modal.Header>
        <Modal.Content>
          <div className="contentModel-text4">
            <div className="modal4-video">
              <video autoPlay={true} loop src={video}></video>
            </div>
            <div className="modal4-text">
              <div className="text-check-infor">
                <p className="text1_model">Địa điểm : </p>
                <p className="text2_model">
                  {data.name} - {data.address} - {data.domain} - {data.nation}
                </p>
              </div>
              <div className="text-check-infor">
                <p className="text1_model">Tên : </p>
                <p className="text2_model">{name}</p>
              </div>
              <div className="text-check-infor">
                <p className="text1_model">Số người : </p>
                <p className="text2_model">{quantity}</p>
              </div>
              <div className="text-check-infor">
                <p className="text1_model">Số điện thoại : </p>
                <p className="text2_model">{phone}</p>
              </div>
              <div className="text-check-infor">
                <p className="text1_model">Email : </p>
                {currentEmail ? (
                  <p className="text2_model">{currentEmail}</p>
                ) : (
                  <p className="text2_model">{email}</p>
                )}
              </div>
              <div className="text-check-infor">
                <p className="text1_model">Thời gian : </p>
                <p className="text2_model">
                  {moment(date[0]).format("DD/MM/YYYY HH:MM")}{" "}
                </p>
              </div>
              <div className="text-check-infor">
                <p className="text1_model">Tổng tiền : </p>
                <p className="text2_model">{priceTicket}</p>
              </div>
              <span>Cảm ơn đã ghé thăm nghen ^^</span>
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Link to="/travel">
            <Button color="green" onClick={() => {}}>
              Okay
            </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Ticket;
