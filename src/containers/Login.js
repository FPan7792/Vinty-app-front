import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Login({ setUserToken, userId, setUserId }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const logIn = async () => {
    try {
      if (email && password) {
        const response = await axios.post(
          "https://vinty-app.herokuapp.com/user/login",
          {
            email: email,
            password: password,
          }
        );
        console.log(response.data);
        setUserToken(
          Cookies.set("token", response.data.token, { expires: 30 })
        );
        setUserId(response.data.id);
        history.push("/");
      } else {
        alert("All the fields are required");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    logIn();
  };

  return (
    <div className="signup-container">
      <h1>Login</h1>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          style={{ border: "solid 2px ", cursor: "pointer" }}
          type="submit"
          value="Log in"
        />
      </form>
    </div>
  );
}

export default Login;
