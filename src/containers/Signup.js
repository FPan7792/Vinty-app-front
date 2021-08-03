import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

function Signup({ setUserToken }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleUserNameChange = (event) => {
    const value = event.target.value;
    setUserName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const signUp = async () => {
    try {
      if (email && password && userName) {
        const response = await axios.post(
          "https://vinty-app.herokuapp.com/user/signup",
          {
            email: email,
            password: password,
            account: {
              username: userName,
            },
          }
        );
        console.log(response.data);
        setUserToken(
          Cookies.set("token", response.data.token, { expires: 30 })
        );
      } else {
        alert("All the fields are required");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signUp();
    history.push("/");
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username (Required)"
          name="username"
          value={userName}
          onChange={handleUserNameChange}
        />
        <input
          type="text"
          placeholder="Enter email (Required)"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          placeholder="Enter password (Required)"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          style={{ border: "solid 2px ", cursor: "pointer" }}
          type="submit"
          value="Signup"
        />
      </form>
    </div>
  );
}

export default Signup;
