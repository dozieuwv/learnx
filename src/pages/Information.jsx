import { useEffect, useState } from "react";
import "../styles/Information.css";
// import "./RegistrationForm.css";
import learnxx from "../assets/learnxx.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/slice/authSlice";

const Information = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
    dayofbirth: "",
    monthofbirth: "",
    yearofbirth: "",
    gender: "",
    phone: "",
    address: "",
    track: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        email: user.email || "",
      }));
    }
  }, [user]);
  const options = [
    "frontend",
    "backend",
    "product-design",
    "data-analysis",
    "artificial-intelligence",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    setLoading(true);
    try {
      event.preventDefault();
      console.log(formData);
      const response = await axios.post(
        "https://learnx-official-api.onrender.com/api/v1/enroll/signUp",
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Specify JSON format
            Accept: "application/json", // Ensure JSON response
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
        // const loginData = response.data;
        setLoading(false);
        // dispatch(login(loginData)); // Store in Redux
        navigate("/signin"); // Redirect to dashboard
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

  console.log(user);

  if (!user) {
    return <p>Loading user data...</p>;
  }
  if(!isAuthenticated) {
    navigate("/signin")
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <img src={learnxx} alt="Logo" className="form-logo" />
        <h2>Information Data</h2>
        <p>Complete your registration to get started</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formgroup">
          <div className="formgroupfist">
            <label>First Name</label>
            <input
              type="text"
              disabled
              name="firstname"
              id="disss"
              placeholder="Enter First Name"
              value={user?.firstname}
              // onChange={handleChange}
              required
            />
          </div>
          <div className="formgroupfist">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter Last Name"
              disabled
              id="disss2"
              value={user?.lastname}
              // onChange={handleChange}
              required
            />
          </div>
          <div className="display_none">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={user?.email}
              // onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="formgroupsec">
          <div className="groupagecon">
            <label>Please state your age</label>
            <div className="formgroupage">
              {/* <label>Please state your age</label> */}
              <input
                type="text"
                name="dayofbirth"
                placeholder="DD"
                value={formData.day}
                onChange={handleChange}
                maxLength="2"
                required
              />
              <input
                type="text"
                name="monthofbirth"
                placeholder="MM"
                value={formData.month}
                onChange={handleChange}
                maxLength="2"
                required
              />
              <input
                type="text"
                name="yearofbirth"
                placeholder="YY"
                value={formData.year}
                onChange={handleChange}
                maxLength="4"
                required
              />
            </div>
          </div>

          <div className="gendercon">
            <label>Gender</label>
            <div className="formgroupgender">
              <div className="genderoptions">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  Man
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  Woman
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="formgroup">
          <div className="formgroupfist">
            <label>Mobile Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formgroupfist">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <div className="divinfoinput">
            <select
              name="track"
              className="p-2 border border-gray-300 rounded-lg"
              value={formData.track} // Ensure the value is bound to state
              onChange={handleChange} // Handle state update on change
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
          <div>
            <button type="submit" className="submitbtninfo">
              {loading ? "submitting..." : "submit"}
            </button>
          </div>
        </div>
        <span>{errorMessage}</span>
      </form>
    </div>
  );
};

export default Information;
