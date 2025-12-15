import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAPI } from "./api-service.js";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await userAPI.login(username, password);
      console.log("Login successful:", response);
      
      // Redirect to games page after successful login
      navigate("/games");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div></div>
      <div className="container_login">
        <div className="title bebas-neue-regular">Login</div>

        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="uname bebas-neue-regular">
            <label htmlFor="uname"><b>Username</b></label>
          </div>

          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            id="uname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <div className="uname bebas-neue-regular">
            <label htmlFor="psw"><b>Password</b></label>
          </div>

          <div className="uname-2 bebas-neue-regular">
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <span className="bebas-neue-regular">
          New here?{" "}
          <a className="link-2" href="/register">
            Register
          </a>
        </span>
      </div>
    </>
  );
}
