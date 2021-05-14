import React from 'react';
import userPhoto from '../img/user.jpg';

const Action = (props) => (
  <div className="user-header">
    <div      
      onClick={props.handlePick} 
      disabled={!props.hasOptions} >
      <div className="user">
        <div className="user__photo">
          <img className="user__photo--img" src={userPhoto} alt="Yuki Lee" />
        </div>
        <span className="user__name">Yuki Lee</span>  
      </div>
      <button className="big-button">
        What should I do?
      </button>
    </div>
  </div>
);

export default Action;