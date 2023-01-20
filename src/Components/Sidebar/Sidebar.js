import { useEffect, useState } from "react";
import "./Sidebar.css";
import img from "./logo192.png";

const Sidebar = (props) => {
  const [timeBreak, setTimeBreak] = useState(0);

  useEffect(() => {
    let items = localStorage.getItem("breakTime");
    setTimeBreak(items);
  }, []);

  localStorage.setItem("breakTime", timeBreak);

  // read time summation
  let array = props.list;
  let readTime = 0;
  for (let b of array) {
    readTime = readTime + b.time;
  }

  return (
    <div className="sidebar">
      {/* Author profile */}
      <div className="author-profile">
        <img src={img} alt="" />
        <div className="author-info">
          <h4>Mamun Mridha</h4>
          <p>Dhaka,Bangladesh</p>
        </div>
      </div>
      {/* Author Information  */}
      <div className="author-personal-info">
        <p className="author-personal-information">
          Weight <span style={{ fontWeight: "900" }}>60kg</span>
        </p>
        <p className="author-personal-information">
          Height <span style={{ fontWeight: "900" }}>5.5</span>
        </p>
        <p className="author-personal-information">
          Age <span style={{ fontWeight: "900" }}>19yr</span>
        </p>
      </div>
      {/* Break Time  */}
      <div>
        <h3>Add a Break Time</h3>
        <div className="select-break-time">
          <button
            onClick={() => {
              setTimeBreak(10);
            }}
          >
            <p>10m</p>
          </button>
          <button
            onClick={() => {
              setTimeBreak(20);
            }}
          >
            <p>20m</p>
          </button>
          <button
            onClick={() => {
              setTimeBreak(30);
            }}
          >
            <p>30m</p>
          </button>
          <button
            onClick={() => {
              setTimeBreak(40);
            }}
          >
            <p>40m</p>
          </button>
        </div>
      </div>
      {/* Rerading details */}

      <div>
        <h3>Reading Details</h3>
        <div className="reading-time">
          Read Time<span>{readTime}min</span>
        </div>
        <div className="break-time">
          Break Time<span>{timeBreak}min</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
