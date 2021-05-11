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
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}