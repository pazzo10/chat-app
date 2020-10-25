import React from 'react';
import './contact.css';
import PropTypes from "prop-types";


function Contact(props) {
  return (
    <article className="Contact">
      <img className="avatar" src={props.avatar} alt="{props.name}" />
      <div>
        <h2 className="name">{props.name}</h2>
        <button className="status">
          <span
            className={props.online ? "status-online" : "status-offline"}
          ></span>
          <p className="status-text">{props.online ? "online" : "offline"}</p>
        </button>
      </div>
    </article>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool
};
export default Contact;