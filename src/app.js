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
function getLocation(location) {
  if (location) return location;
  else return ' N/A ';
}

const obj = {
  name: 'robin',
  age: 23,
  location: 'NY'
};

const template2 = (
  <div>
    <p>Name {obj.name}</p>
    <p>Age {obj.age}</p>
    <p>Location {getLocation(obj.location)}</p>
  </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
