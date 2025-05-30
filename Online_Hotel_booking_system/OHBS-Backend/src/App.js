import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HotelListPage from "./pages/HotelList";
import RoomListPage from "./pages/RoomList";
import ProfilePage from "./pages/Profile";
import RoomBookingPage from "./pages/RoomBooking";
import Navbar from "./components/Navbar";




function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/hotels" element={<HotelListPage />} />
          <Route path="/rooms" element={<RoomListPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/book-room" element={<RoomBookingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
