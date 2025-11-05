import { useState } from "react";
import instance from "../config/axiosConfig";
import { Link } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     setIsSubmitting(true);
  //     const response = await instance.post("/auth/register", data);
  //   } catch (error) {
  //     console.log(error);
  //     setIsError(error);
  //     setIsSubmitting(false);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Sending:", data); // shows what you're sending

    try {
      setIsSubmitting(true);
      const response = await instance.post("/auth/register", data);
      console.log("Response:", response.data); // shows what backend returned
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    } finally {
      setIsSubmitting(false);
    }
  }


  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Register</h2>

        <div className="auth-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
            className="auth-input"
          />
        </div>

        <div className="auth-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            id="username"
            value={data.username}
            onChange={handleChange}
            className="auth-input"
          />
        </div>

        <div className="auth-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            placeholder="Enter Phone"
            name="phone"
            id="phone"
            value={data.phone}
            onChange={handleChange}
            className="auth-input"
          />
        </div>

        <div className="auth-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            className="auth-input"
          />
        </div>

        <div className="auth-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
            className="auth-input"
          />
        </div>

        <div className="auth-group">
          <button type="submit" className="auth-btn">Register</button>
        </div>
        <p className="auth-text">
          Already Registered? <Link to="/login" className="auth-link">Login Here</Link>
        </p>
      </form>


    </>
  );
}

export default Register;
