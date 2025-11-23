import React from "react";
import PropTypes from "prop-types";
import "../styles/main.css";


const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-header'>
            <img src={props.image} className="icon" alt={props.title} />
            <h5>{props.title}</h5>
            </div>
            <p className='description'>{props.desc}</p>
        </div>
    );
};


Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Card;
