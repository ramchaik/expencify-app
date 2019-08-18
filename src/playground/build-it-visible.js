class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility App</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? 'Hide Text' : 'Show text'}
        </button>
        {this.state.visibility && <p>This is a secret.......</p>}
      </div>
    ); 
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
