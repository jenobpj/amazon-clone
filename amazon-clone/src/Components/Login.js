import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const signIn = (e) => {
  e.preventDefault();
};
const register = (e) => {
  e.preventDefault();
};
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signinButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signin-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Please see our Privacy Notice,Our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create your Amzon Account
        </button>
      </div>
    </div>
  );
}
export default Login;
