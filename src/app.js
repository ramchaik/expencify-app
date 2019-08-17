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
        <AddOption options={options} />
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
  handleClick() {
    alert('Clicked...');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>What should I do ?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
    alert('removed');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(e) {
    const option = e.target.elements.option.value.trim();
    if (option) {
      // this.props.options.push(option);
      alert(option);
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={e => this.handleAddOption(e)}>
        <input type='text' name='option' />
        <button> Add </button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
