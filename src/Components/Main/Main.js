import React, { useEffect, useState } from "react";
import "./Main.css";
import Book from "../Book/Book";
import Sidebar from "../Sidebar/Sidebar";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import Question from "../Questions/Question";

const Main = () => {
  const [books, setBooks] = useState([]);
  const [list, setList] = useState([]);
  // Load Data
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  //   Handle Add To List Function

  const handleAddToList = (clicked) => {
    const newTime = [...list, clicked];
    setList(newTime);
  };
  // Toast
  const handleToast = () => {
    // toast("Wow! You Complete Your Activity");
    Swal.fire("Great!", "You Complete Your Activity", "success");
  };
  return (
    <div className="main-page">
      <div className="header-info">
        <h2>Learn Programme With Book</h2>
        <h5>Select Todays Book </h5>
      </div>
      <div className="main-container">
        <div className="books-side">
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              handleAddToList={handleAddToList}
            ></Book>
          ))}
        </div>
        <div className="summery-side">
          <Sidebar list={list}></Sidebar>

          <div className="complete-btn">
            <button onClick={handleToast}>
              <p>Activity Complete</p>
            </button>
          </div>
        </div>
      </div>
      <Question></Question>
    </div>
  );
};

export default Main;
