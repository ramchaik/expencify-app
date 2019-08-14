let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility App</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Text' : 'Show text'}
      </button>
      {visibility && (<p>This is a secret.......</p>)}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
