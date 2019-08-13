const myApp = {
  title: 'The Main Title',
  option: []
};

const template = (
  <div>
    <h1>{myApp.title}</h1>
    {myApp.subtitle && <p>{myApp.subtitle}</p>}
    {myApp.option.length > 0 ? 'Here are your options' : 'no options'}
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

let count = 0;

const addOne = () => {
  console.log('addOne');
};

const minusOne = () => {
  console.log('minusOne');
};

const reset = () => {
  console.log('Reset');
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset Count</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
