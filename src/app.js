class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToDelete) {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => option !== optionToDelete)
    }));
  }

  handlePick() {
    const options = this.state.options;
    const len = options.length;
    const index = Math.floor(Math.random() * len);
    alert(options[index]);
  }

  render() {
    const subtitle = 'Put your life in hands of a computer.';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          options={this.state.options}
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do ?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map((option, index) => (<Option key={index} value={option} handleDeleteOption={props.handleDeleteOption}/>))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      <span>{props.value}{'         ' }</span>
      <button onClick={() => props.handleDeleteOption(props.value)}>Remove</button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error} </p>}
        <form onSubmit={e => this.handleAddOption(e)}>
          <input type='text' name='option' />
          <button> Add </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <IndecisionApp options={['Devils den', 'Hudsen River']} />,
  document.getElementById('app')
);
