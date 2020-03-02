import React from 'react';
import { render } from 'react-dom';

import { Button } from './Button';

const App = () => {
  return (
    <div>
      <p>Hello</p>
      <Button>Btn</Button>
    </div>
  );
};

render(<App />, document.getElementById('app'));
