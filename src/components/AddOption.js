import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    
    if(!error || (option === e.target.elements.option.value.trim())) {
      e.target.elements.option.value = '';
    } 
  };

  render() {
    return (
      <div className="form-container">
        <div className="line">
          {this.state.error && 
            <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleSubmit}>
            <input className="add-option__input" type="text" name="option" />
            <button className="button button--plus"><i className="fas fa-plus"></i></button>
          </form>
        </div>
      </div>
    );
  }
}