import React from "react";
import "./Book.css";

const Book = ({ book, handleAddToList }) => {
  //   console.log(book);
  const { picture, name, time } = book;

  return (
    <div className="book">
      <img src={picture} alt="" />
      <h2>{name}</h2>

      <p>
        Time : <span style={{ fontWeight: "bold" }}>{time} minutes</span>
      </p>
      <button onClick={() => handleAddToList(book)} className="addToList-btn">
        <p>Add To List</p>
      </button>
    </div>
  );
};

export default Book;
