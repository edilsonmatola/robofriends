import React from "react";

const Scroll = (props) => {
  return (
    <>
      <div
        style={{
          overflowY: "hidden",
          border: "1px solid black",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Scroll;
