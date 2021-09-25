import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="tc">
      <div className="white f3">
        <p>{`${name} Your Current Entries Count is ...`}</p>
      </div>
      <div className="white f1">{`${entries}`}</div>
    </div>
  );
};

export default Rank;
