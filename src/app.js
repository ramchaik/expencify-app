class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in hands of a computer.';
    const options = ['1', '2', '3'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do ?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options Here..
        {this.props.options.map((option, index) => {
          return <Option key={index} value={option} />;
        })}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.value}</li>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <button>Add</button>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
