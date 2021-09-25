import React from "react";
import "./FaceRecongnition.css";

const FaceRecongnition = ({ image, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2 ">
        <img src={image} width="500px" height="auto" alt="" id="inputImage" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecongnition;
