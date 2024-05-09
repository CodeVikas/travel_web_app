import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/footer';
import './login.css';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const logResponseData = (response) => {
        console.log("Response data:", response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            logResponseData(response);
            console.log("Response data:", response.data.success); 
    
            if (response.data.success) {
                console.log(response.data);
                navigate('/adminnews');
            } else {
                setError("Invalid email or password.");
            }
        } catch (err) {
            console.log("Error:", err);
        }
    };

    return (
        <React.Fragment>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="container rounded col-sm-5 mx-auto mt-5 mb-5 pb-3 justify-content-center" id="main">
                    <div>
                        <h3 className="h2 text-center mt-5 pt-5">Administrator Page </h3>
                        <h3 className="h6 text-center mb-5">--(Login In)-- </h3>
                    </div>

                    <div className="mb-3 row justify-content-center">
                        <label htmlFor="exampleInputEmail1" className="form-label col-sm-3 col-form-label">Email address</label>
                        <div className="col-sm-5">
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-center mt-3">
                        <label htmlFor="exampleInputPassword1" className="form-label col-sm-3 col-form-label">Password</label>

                        <div className="col-sm-5">
                            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} id="exampleInputPassword1" />
                        </div>
                    </div>

                    {error && <div className="text-danger mb-4 text-center">{error}</div>}

                    <div className="mb-3 d-flex align-items-center  justify-content-center">
                        <button type="submit" className="btn btn-primary me-2">Sign In</button>
                        <button type="button" onClick={() => navigate("/")} className="btn btn-primary me-0">Go to back</button>
                    </div>
                </div>
            </form>
            <Footer />
        </React.Fragment>
    );
};

export default Login;
