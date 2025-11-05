import { useState } from "react";
import instance from "../config/axiosConfig";
import { Link } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await instance.post("/auth/login", data);
    } catch (error) {
      console.log(error);
      setIsError(error);
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Login</h2>

        <div className="auth-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            id="username"
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
          <button type="submit" className="auth-btn">Login</button>
        </div>
        <p className="auth-text">
          New User? <Link to="/register" className="auth-link">Register Here</Link>
        </p>
      </form>

    </>
  );
}

export default Login;
