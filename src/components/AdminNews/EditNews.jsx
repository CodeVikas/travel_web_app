import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../navbar/navbar";
import Footer from "../Footer/footer";

const EditNewsForm = () => {
  const { id } = useParams();
  const [error, setError] = useState(null); 
  const [successMessage, setSuccessMessage] = useState(null); 
  const navigate = useNavigate(); 

  const [news, setNews] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/newsbyid/${id}`)
      .then((response) => {
        setNews(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/updatenews/${id}`, news)
      .then((response) => {
        console.log("News updated successfully: ", response.data);
        setSuccessMessage("News updated successfully!");
        setTimeout(() => {
          navigate("/adminnews");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error updating news: ", error);
        setError("Error updating news. Please try again.");
      });
  };

  return (
    <React.Fragment>
    <Navbar/>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <h1>Edit News</h1>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={news.title}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={news.description}
                    onChange={handleChange}
                  />
                </Form.Group>
                
                {error && <div style={{ color: "red" }}>{error}</div>}
                {successMessage && (
                  <div style={{ color: "green", marginTop: 10 }}>
                    {successMessage}
                  </div>
                )}
                <Button variant="primary mt-4" type="submit">
                  Update News
                </Button>{" "}
                <Button
                  variant="secondary mt-4"
                  onClick={() => navigate("/adminnews")}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <Footer/>
    </React.Fragment>
  );
};

export default EditNewsForm;
