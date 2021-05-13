import React from 'react';

const Option = (props) => (
  <div className="option">
    <div className="option__name">
      <span className="option__number"><i className="fas fa-asterisk"></i></span>
      <p className="option__text">{props.optionText}</p>  
    </div>
    <button 
      className="button button--icon"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}>
        <i className="fas fa-trash-alt"></i>
    </button>
  </div>
);

export default Option;