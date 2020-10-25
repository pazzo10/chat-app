import React from 'react';
import './contact.css';


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

export default Contact;