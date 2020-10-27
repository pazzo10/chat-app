import React, { useState } from 'react';
import PropTypes from "prop-types";
import './contact.css';


const Contact = ({ online, avatar, name}) => {

    const[isOnline, setOnline] = useState(online)
 
  return (
    <article className="Contact">
      <img className="avatar" src={avatar} alt={name}/>
      <div>
        <h2 className="name">{name}</h2>
        <button className="status"
        onClick={() => {setOnline (!isOnline);
        }}>
          <span
            className={isOnline ? "status-online" : "status-offline"}
          ></span>
          <p className="status-text">{isOnline ? "online" : "offline"}</p>
        </button>
      </div>
    </article>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};
export default Contact;