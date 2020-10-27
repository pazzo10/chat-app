import React, { useState } from 'react';

import './contact.css';


const Contact = ({ avatar, name, online }) => {

    const[isonline, setOnline] = useState("connected")
 
  return (
    <article className="Contact">
      <img className="avatar" src={avatar} alt="{this.props.name}" />
      <div>
        <h2 className="name">{name}</h2>
        <button className="status" 
        onClick={() => {setOnline ("isOnline");
        }}>
          <span
            className={online ? "status-online" : "status-offline"}
          ></span>
          <p className="status-text">{online ? "online" : "offline"}</p>
        </button>
      </div>
    </article>
  );
}


export default Contact;