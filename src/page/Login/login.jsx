import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/menu/menu";
import { Button, Modal } from "semantic-ui-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avt, setavt] = useState("");
  const [emailDangnhap, setemailDangnhap] = useState("");
  const [passDangnhap, setpassDangnhap] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const currentEmail = localStorage.getItem("emailDangNhap");
  const currentPass = localStorage.getItem("passwordDangNhap");

  useEffect(() => {
    const signInBtn = document.getElementById("signIn");
    const signUpBtn = document.getElementById("signUp");
    const fistForm = document.getElementById("form1");
    const secondForm = document.getElementById("form2");
    const container = document.querySelector(".containerRegiter");
    signInBtn.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
    signUpBtn.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });
    fistForm.addEventListener("submit", (e) => e.preventDefault());
    secondForm.addEventListener("submit", (e) => e.preventDefault());
  }, []);

  const handleChange = (e, field) => {
    if (field === "username") {
      setUsername(e.target.value);
    }
    if (field === "Localpassword") {
      setPassword(e.target.value);
    }
    if (field === "Localemail") {
      setEmail(e.target.value);
    }
    if (field === "passDangnhap") {
      setpassDangnhap(e.target.value);
    }
    if (field === "emailDangnhap") {
      setemailDangnhap(e.target.value);
    }
    if (field === "avt") {
      setavt(e.target.value);
    }
  };

  const OnSignup = () => {
    const container = document.querySelector(".containerRegiter");
    if (username === "" || password === "" || email === "") {
      setOpenDialog(true);
      setMessage("Không được bỏ trống !!!");
    } else {
      setOpenDialog(true);
      setMessage("Đăng ký thành công !!!");
      container.classList.remove("right-panel-active");
    }
 
    localStorage.setItem("emailDangNhap", email);
    localStorage.setItem("passwordDangNhap", password);
  };

  const OnSignin = () => {
    if(emailDangnhap === currentEmail && passDangnhap === currentPass){
      localStorage.setItem("username", username);
      localStorage.setItem("avt", avt);
      navigate('/travel')
    }else{
      setOpenDialog(true);
      setMessage('Sai Email or Password !!!')
    }
  };

  return (
    <div>
      <Navbar />
      <div className="containerLogin">
        <div className="containerRegiter right-panel-active">
          <div class="container__form container--signup">
            <form action="#" class="form" id="form1">
              <h2 class="form__title">Sign Up</h2>
              <input
                type="text"
                class="input"
                placeholder="Chèn link avt ở đây"
                value={avt}
                onChange={(e) => handleChange(e, "avt")}
              />
              <input
                type="text"
                placeholder="User"
                class="input"
                value={username}
                onChange={(e) => handleChange(e, "username")}
              />
              <input
                type="email"
                placeholder="Email"
                class="input"
                value={email}
                onChange={(e) => handleChange(e, "Localemail")}
              />
              <input
                type="password"
                placeholder="Password"
                class="input"
                value={password}
                onChange={(e) => handleChange(e, "Localpassword")}
              />
              <button class="btn" onClick={OnSignup}>
                Sign Up
              </button>
            </form>
          </div>

          <div class="container__form container--signin">
            <form action="#" class="form" id="form2">
              <h2 class="form__title">Sign In</h2>
              <input
                type="email"
                placeholder="Email"
                class="input"
                value={emailDangnhap}
                onChange={(e) => handleChange(e, "emailDangnhap")}
              />
              <input
                type="password"
                placeholder="Password"
                value={passDangnhap}
                onChange={(e) => handleChange(e, "passDangnhap")}
                class="input"
              />
              <a href="#" class="link">
                Forgot your password?
              </a>
              <button class="btn" onClick={OnSignin}>
                Sign In
              </button>
            </form>
          </div>

          <div class="container__overlay">
            <div class="overlay">
              <div class="overlay__panel overlay--left">
                <button class="btn" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="overlay__panel overlay--right">
                <button class="btn" id="signUp">
                  Sign Up
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
            <p>{message}</p>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Login;
