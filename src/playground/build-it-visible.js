class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }
  
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }
  
  render() {
    const { visibility } = this.state;

    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
        {visibility && (<p>check down here to see the details</p>)}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*
let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
      {visibility && (<p>check down here to see the details</p>)}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
render();
*/