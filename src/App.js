import * as React from 'react';

const title = 'Test';
const word = 'hi';

const welcome = {
  greeting: 'Hi',
  name: 'Nathaniel',
}


function App() {


  return (
    <div>
      <h1>{welcome.greeting} {welcome.name}</h1>

      <label htmlFor="search">search: </label>
      <input id="search" type="text"/>
      </div>
  );
}

export default App;