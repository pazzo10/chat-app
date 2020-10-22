import React from 'react';
import './contact.css';


const avatar = "https://randomuser.me/api/portraits/lego/2.jpg";
const name = "Lebron James";
const isOnline = true;

function Contact () {
    return (
      <article className="Contact">
          <img className="avatar" src={avatar} alt="my profile"/>
          <div className="name">
            <h2 className="name">{name}</h2>      
            <button className="status">{isOnline? "Online": "Offline"}</button>
          </div>
      </article>

    );
}

export default Contact;
