import React from "react";


function MyProjects(props) {
    return (
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
      </div>
    );
  }

export default MyProjects;