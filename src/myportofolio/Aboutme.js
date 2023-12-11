import React from "react";
import image1 from "../assets/image1.jpg";
import './Aboutme.css';

/*function Aboutme(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
    </div>
  );
}*/

function Aboutme(props){
 

    return (
        <div>
          <img className="IMG" src={image1} alt="image1" />
          <h2>{props.name}</h2>
          <p>{props.bio}</p>
          <p>{props.email}</p>
        </div>
      );
}
export default Aboutme;