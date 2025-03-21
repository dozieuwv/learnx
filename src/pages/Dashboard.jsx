import { LuClipboardList } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import React from "react";
import Frame2017 from "../assets/Frame2017.png";
import Frame2016 from "../assets/Frame2016.png";
import Group151 from "../assets/Group151.png";

const Dashboard = () => {
  return (
    <>
      <div>
        <div>
          <h3>Hi, Precious (PD)</h3>

          <div>
            <div>
              <p>Product Design (Stats)</p>
              <hr />
              <p>
                <LuClipboardList />
                18Hours|
                <CiClock2 />
                96Hours
              </p>
            </div>

            <div>
              <div>
                <h4>6 Hhrs</h4>
                <h6>Total hours Completed</h6>
              </div>
              <div>
                <img src={Frame2017} alt="" />
                
              </div>
            </div>
          </div>

          <div>
            <h3>My Mentors</h3>
            <hr />

            <p>3</p>
            <p>Design Mentors</p>
            <div>
            <img src={Frame2016} alt="" />
            <img src={Frame2017} alt="" />
            </div>
          </div>


          <div>
            <h3>Certification</h3>
            <hr />

            <p>3/18</p>
            <p>Course completion</p>
            <div>
            <img src={Group151} alt="" />
            <img src={Frame2017} alt="" />
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
