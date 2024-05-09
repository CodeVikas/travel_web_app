import React from "react";

import Home from "./components/Home/home";
import About from './components/AboutUs/about'
import Package from "./components/Packages/package";
import News from "./components/News/news";
import Contact from "./components/Contact/contact"

import AdminNews from './components/AdminNews/news'
import AddNews from './components/AdminNews/AddNews'
import UpdateNews from './components/AdminNews/EditNews'
import Query from './components/Query/Query'
import AddBooking from './components/Booking/Booking'

import BookTicket from "./components/BookTicket/book";
import Career from './components/Career/career'
import Login from './components/Login/login'

import Itza from './components/Itza/itza';
import TajMahal from './components/TajMahal/taj_mahal'
import MachuPicchu from './components/Machu/Machu'
import Colosseum from './components/Colosseum/Colosseum'
import Nav from './components/Nav/nav'

import Logout from './components/LogOut/LogOut'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/about' exact element={<About/>}></Route>
          <Route path='/package' exact element={<Package/>}></Route>
          <Route path='/news' exact element={<News/>}></Route>
          <Route path='/contact' exact element={<Contact/>}></Route>

          <Route path='/book' exact element={<BookTicket/>}></Route>
          <Route path ="/career" exact element ={<Career/>}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="/nav" exact element={<Nav/>} ></Route>

          <Route path='/adminnews' exact element={<AdminNews/>}></Route>
          <Route path ='/addnews' exact element={<AddNews/>}></Route>
          <Route path ='/updatenews/:id' exact element={<UpdateNews/>}></Route>
          <Route path ='/query' exact element={<Query/>}></Route>
          <Route path ='/booking' exact element={<AddBooking/>}></Route>

          <Route path='/itza' exact element={<Itza/>}></Route>
          <Route path='/tajmahal' exact element={<TajMahal/>}></Route>
          <Route path='/machupicchu' exact element={<MachuPicchu/>}></Route>
          <Route path='/colosseum' exact element={<Colosseum/>}></Route>

          <Route path='/logout' exact element={<Logout/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
