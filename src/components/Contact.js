import React from 'react';
import './contact.css';


const avatar = "https://randomuser.me/api/portraits/lego/2.jpg";
const name = "Patrick Mwimanzi";

function Contact () {
    return (
      <article className="Contact">
          <img className="avatar" src={avatar} alt="my profile"/>
          <div>
            <h2 className="name">{name}</h2>      
            <button className="status">
              <span class="status-online" ></span>
              <p class="status-text">Online</p>
            </button>
          </div>
      </article>

    );
}

export default Contact;
