import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Landingpage";
import Layout from "./Layout";
import "./App.css";
import AuthLayout from "./AuthLayout";
import SignIn from "./pages/SignIn";
import Payment from "./pages/Payment"
import Information from "./pages/Information"
import Register from "./pages/Register";
import Frontend from "./Frontend";
import Dataanalysis from "./Dataanalysis";  
import Backend from "./Backend";
import ProductDesign from "./ProductDesign";
import AIMachineLearning from "./AIMachineLearning";
import DashboardLayout from "./DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses.jsx"
import Mentors from "./pages/Mentors.jsx"
import PaymentModal from "./pages/PaymentModal.jsx"
import Certificate from "./pages/Certificate"
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
// import CourseViewer from "./pages/CourseViewer.jsx";


function AppRoutes() {
  // const location = useLocation();
  
  return (
    <Routes>
      {/* Main Layout Pages */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Landingpage />} />
        <Route path="/about" element={<Landingpage />} />
        <Route path="/contact-us" element={<Landingpage />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/data-analysis" element={<Dataanalysis />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/product-design" element={<ProductDesign />} />
        <Route path="/ai-machine-learning" element={<AIMachineLearning />} />
      </Route>

      {/* Auth Pages inside AuthLayout */}
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/complete-registration" element={<Information />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={< Dashboard/>} />
        {/* <Route path="/courses" element={<CourseViewer />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/paymentModal" element={<PaymentModal />} />
        <Route path="/certificate" element={<Certificate />} />
        {/* <Route path="/Coursesadd" element={<Coursesadd />} /> */}
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;