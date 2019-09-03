import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };
  handleAddOption = option => {
    if (!option) {
      return 'Enter a valid value to add item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToDelete => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToDelete)
    }));
  };

  handlePick = () => {
    const options = this.state.options;
    const len = options.length;
    const index = Math.floor(Math.random() * len);
    const option = options[index];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) this.setState(() => ({ options }));
    } catch (error) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {}

  render() {
    const subtitle = 'Put your life in hands of a computer.';
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className='container'>
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
          <OptionModal
            selectedOption={this.state.selectedOption}
            onClose={this.handleClearSelectedOption}
          />
        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};
