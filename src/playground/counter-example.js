class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleAddCount = this.handleAddCount.bind(this);
    this.handleMinusCount = this.handleMinusCount.bind(this);
    this.handleResetCount = this.handleResetCount.bind(this);
  }

  componentDidMount() {
    try {
      const str = localStorage.getItem('count');
      const count = parseInt(str, 10);
      if (!isNaN(str)) {
        this.setState(() => ({ count }));
      }
    } catch (error) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const { count } = this.state;
      const str = count.toString();

      localStorage.setItem('count', str);
    }
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

ReactDOM.render(<Counter />, document.getElementById('app'));
