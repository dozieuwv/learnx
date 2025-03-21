import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Landingpage";
import Layout from "./Layout";
import "./App.css";
import AuthLayout from "./AuthLayout";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Frontend from "./Frontend";
import Dataanalysis from "./Dataanalysis";  
import Backend from "./Backend";
import ProductDesign from "./ProductDesign";
import AIMachineLearning from "./AIMachineLearning";
import DashboardLayout from "./DashboardLayout";
import Dashboard from "./pages/Dashboard";

function AppRoutes() {
  // const location = useLocation();
  
  return (
    <Routes>
      {/* Main Layout Pages */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Landingpage />} />
        <Route path="/about" element={<Landingpage />} />
        <Route path="/contact-us" element={<Landingpage />} />
        <Route path="/Frontend" element={<Frontend />} />
        <Route path="/Dataanalysis" element={<Dataanalysis />} />
        <Route path="/Backend" element={<Backend />} />
        <Route path="/ProductDesign" element={<ProductDesign />} />
        <Route path="/AIMachineLearning" element={<AIMachineLearning />} />
      </Route>

      {/* Auth Pages inside AuthLayout */}
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={< Dashboard/>} />
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