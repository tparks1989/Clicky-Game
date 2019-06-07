
import React from "react";
import "./wrapper.css";

const wrapper = props => <div className= {props.shakeWrapper==="true" ? "wrapperShake" : "wrapper"}>{props.pictures}</div>;

export default wrapper;