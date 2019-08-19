class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
    this.handleAddCount = this.handleAddCount.bind(this);
    this.handleMinusCount = this.handleMinusCount.bind(this);
    this.handleResetCount = this.handleResetCount.bind(this);
  }
  handleAddCount() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusCount() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleResetCount() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddCount}>+1</button>
        <button onClick={this.handleMinusCount}>-1</button>
        <button onClick={this.handleResetCount}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter ç/>, document.getElementById('app'));
