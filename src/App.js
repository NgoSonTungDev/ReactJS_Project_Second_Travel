import "./App.css";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./page/Home/home";
import About from "./page/about/about";
import Service from "./page/service/service";
import Login from "./page/Login/login";
import Review from "./page/review/review";
import Destination from "./page/destination/destination";
import SubpageHome from "./page/subpageHome/subpageHome";
import Ticket from "./page/ticketBookingPage/ticket";
import SubpageService from "./page/subpageService/subpageService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/travel" exact element={<Home />}> 
          {/* <Route path=":id" exact element={<SubpageHome />}>
            <Route path="ticket/:id" exact element={<Ticket />} />
          </Route> */}
        </Route>
        <Route path="/travel/:id" exact element={<SubpageHome />} />
        <Route path="/travel/:id/travel/ticket/:id" exact element={<Ticket />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/service" exact element={<Service />} />
        <Route path="/service/:id" exact element={<SubpageService />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/review" exact element={<Review />} />
        <Route path="/destination" exact element={<Destination />} />
        {/* <Route component={NotFoundPage} />      */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
