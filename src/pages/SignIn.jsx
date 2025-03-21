import { Link, useNavigate } from "react-router-dom";
import learnxx from "../assets/learnxx.png";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    try {
      event.preventDefault();
      console.log(inputs);
      const response = await axios.post(
        "https://learnx-official-api.onrender.com/api/v1/user/signIn",
        inputs,
        {
          headers: {
            "Content-Type": "application/json", // Specify JSON format
            Accept: "application/json", // Ensure JSON response
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
        setLoading(false);
        navigate("/dashboard");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      // console.log(error.response.data.error);
      setErrorMessage(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="auth_layout11111">
      <div className="signin">
        <div className="signin__header">
          <img src={learnxx} alt="" className="loginimg" />
          <h4>Hello! Welcome back</h4>
        </div>

        <form action="" className="signin_form" onSubmit={handleSubmit}>
          <div className="errorsigin">{errorMessage}</div>
          <div className="input1">
            <label htmlFor="">Email</label>
            <input
              name="email"
              type="text"
              placeholder=" enter Email"
              className="inputlogin"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>

          <div className="input1">
            <label htmlFor="">Password</label>
            <input
              name="password"
              type="password"
              placeholder=" enter password"
              className="inputlogin"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>

          <div className="checkbox">
            <div className="checkbox1">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <div>
              <Link to="/" className="loginlink1">
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="inputdiv">
            <button className="signup__btn" type="submit">
             {loading ? "Logging in..." : "Log in"}
            </button>
          </div>

          <div className="login_link">
            <p className="pppsign">Already have an account? </p>
            <Link to="/" className="loginlink">
              sign up
            </Link>
          </div>
        </form>
      </div>

      </div>
    </>
  );
};

export default SignIn;
