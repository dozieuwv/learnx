import { Outlet } from "react-router-dom";
import "./App.css";


const AuthLayout = () => {
  return (
    <div className="auth_layout">
      <div className="auth_layout__content">
      <Outlet />

      </div>
    </div>
  );
};

export default AuthLayout;
