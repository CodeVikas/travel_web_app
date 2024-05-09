import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Nav from "../Nav/nav";
import Footer from '../Footer/footer'
import './news.css'

const NewsGrid = () => {
  const [news, setNews] = useState([]);
  const navigate =useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:5000/news")
      .then((response) => setNews(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/updatenews/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this news?")) {
      axios
        .delete(`http://localhost:5000/delete/${id}`)
        .then((response) => {
          if (response.status === 200) {
            setNews(news.filter((item) => item.id !== id));
            alert("News deleted successfully");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <React.Fragment>
      <Nav/>
      <div className="container my-5">
        <p className="h1 text-center mb-4">News</p>
        <div className="row">
          <div className="col-12 mb-3">
            <button
              className="btn btn-primary" onClick={()=>{
                navigate('/addnews')
              }}
            >
              Add News
            </button>
          </div>
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {news.map((item) => (
                  <tr key={item.id}>
                    <td className="action">{item.id}</td>
                    <td>{item.title}</td>
                    <td >{item.description}</td>
                    <td className="action">
                      <button
                        className="btn btn-sm btn-info me-2 "
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default NewsGrid;
