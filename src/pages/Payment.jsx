import { Link, useNavigate } from "react-router-dom";
import learnxx from "../assets/learnxx.png";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/authSlice";
import "../styles/Payment.css"

const Payment = () => {
  const [inputs, setInputs] = useState({
    email: "",
    amount: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        // "https://learnx-official-api.onrender.com/api/v1/user/signIn",
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
        const loginData = response.data;
        setLoading(false);
        dispatch(login(loginData)); // Store in Redux
        
        navigate("/complete-registration"); // Redirect to dashboard
        
        // navigate("/dashboard");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      // console.log(error.response.data.error);
      setErrorMessage(error.response.data.error);
      setLoading(false);
    }
  };

  const options = [
    "Frontend",
    "Backend",
    "Product Design",
    "Data Analysis",
    "AI & Machine Learning",
  ];


  return (
    <>
      <div className="auth_layout11111">
      <div className="signin">
        <div className="signin__header">
          <img src={learnxx} alt="" className="loginimg" />
          <h4>LearnX Payment Plan</h4>
          <p>Complete your enrollment, kindly make tuition <br />payment here</p>
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

          <div className="divinfoinput">
            <select
              className="p-2 border border-gray-300 rounded-lg"
            //   value={selectedOption}
            //   onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="" disabled>
                Select an option
              </option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          

          <div className="input1">
            <label htmlFor="">payment amount</label>
            <input
              name="enter amount"
              type="text"
              placeholder=" enter Email"
              className="inputlogin"
              value={inputs.amount}
              onChange={handleChange}
            />
          </div>

          <div className="inputdiv">
            <button className="signup__btn" type="submit">
             {loading ? "Logging in..." : "Log in"}
            </button>
          </div>

          <div className="login_link">
            <p className="pppsign">Dont have an account? </p>
            <Link to="/signup" className="loginlink">
              sign up
            </Link>
          </div>
        </form>
      </div>

      </div>
    </>
  );
};

export default Payment;
