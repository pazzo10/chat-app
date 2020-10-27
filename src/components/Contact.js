import React from 'react';
import './contact.css';


class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }

render() {
  return (
    <article className="Contact">
      <img className="avatar" src={this.props.avatar} alt="{this.props.name}" />
      <div>
        <h2 className="name">{this.props.name}</h2>
        <button className="status" onClick={event => { 
          this.setState({online: !this.state.online});
        }}>
          <span
            className={this.state.online ? "status-online" : "status-offline"}
          ></span>
          <p className="status-text">{this.state.online ? "online" : "offline"}</p>
        </button>
      </div>
    </article>
  );
}
}

export default Contact;