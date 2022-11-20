import React from 'react';
import { Link } from 'react-router-dom';

const VerkaufenItem = ({ name, image }) => {
  return (
    <div className="box" data-aos="zoom-in-down">
      <div className="image">
        <img src={image} alt="fsaf" />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>
          Dieser Zaun ist die formschöne und kostengünstige Umzäunung
          für Ihre Gartenanlage.
        </p>

        <Link to={name}>
          <button className="btn btn-secondary">Mehr</button>
        </Link>
      </div>
    </div>
  );
};

export default VerkaufenItem;
