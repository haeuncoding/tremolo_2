import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  return (
    <>
    <div id="login-screen">
    <h1>Welcome back.</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label className="input-field">
          Username or Email
          <br />
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            className="input-box"
            required
          />
        </label>

        <br />
        
        <label className="input-field">
          Password
        <br />  
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-box"
            required
          />
        </label>

        <br />
        
        <button type="submit" className="input-field">Log In</button>
      </form>
      </div>
    </>
  );
}

export default LoginForm;