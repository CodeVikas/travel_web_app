import React, { useState, useEffect } from "react";
import axios from "axios";
import './news.css'; 
import Navbar from "../navbar/navbar";
import Footer from '../Footer/footer'

const NewsGrid = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/news")
      .then((response) => setNews(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <Navbar/>
    <div className="m-5 text-center px-4 py-2 h1">Latest News</div>
    <div className="container px-4 my-4">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr className="text-center" id="bodynews">
                <th scope="col" id="bodynews">News Title</th>
                <th scope="col" id="bodynews">News Description</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {news.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td id="line">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};


export default NewsGrid;
