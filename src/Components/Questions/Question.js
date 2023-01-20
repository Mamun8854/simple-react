import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="QuesTions">
      <div className="question">
        <h2>How Does React Work???</h2>
        <p>
          React is a library. For building user interfaces. This is perfect
          because, more often than not, this is all we want. The best part about
          this description is that it highlights React's simplicity. It's not a
          mega framework. It's not a full-stack solution that's going to handle
          everything from the database to real-time updates over web socket
          connections. We don't actually want most of these pre-packaged
          solutions, because in the end, they usually cause more problems than
          they solve. Facebook sure did listen to what we want.
        </p>
      </div>
      <div className="question">
        <h2>Defference Between props And state?? </h2>
        <p>
          *props- 1)The Data is passed from one component to another. 2)Props
          are read-only.
          <br />
          *state- 1)The Data is passed within the component only. 2)State is
          both read and write.
        </p>
      </div>
      <div className="question">
        <h2>Where use useEffect??</h2>
        <p>
          useeffect use for : fetching data, directly updating the DOM, and
          timers. useEffect accepts two arguments.
          <br />
          The second argument is optional.
        </p>
      </div>
    </div>
  );
};

export default Question;
