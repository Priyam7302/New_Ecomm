import { useState } from "react";
import instance from "../config/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";


function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(null);
  const navigate = useNavigate();
  const { checkAuthStatus } = useAuth();

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await instance.post("/auth/login", data, {
        withCredentials: true,
      });
      console.log(response);
      if (response.status === 200) {
        await checkAuthStatus();
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      setIsError(error.message);
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-title">Login to Ecommerce</h2>

      {isError && <p style={{ color: "red", textAlign: "center" }}>{isError}</p>}

      <div className="auth-group">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={data.username}
          onChange={handleChange}
          className="auth-input"
          required
        />
      </div>

      <div className="auth-group">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          className="auth-input"
          required
        />
      </div>

      <button type="submit" className="auth-btn" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </button>

      <p className="auth-text">
        New user?{" "}
        <Link to="/register" className="auth-link">
          Register here
        </Link>
      </p>
    </form>
  );
}

export default Login;