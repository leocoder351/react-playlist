import React, { useEffect } from 'react';
// import { Button } from '@byted/homed_components';
// import '@byted/homed_components/dist/homed.min.css';

import { Button } from 'frog-ui';
import 'frog-ui/dist/frog.min.css';
import { sayName } from './abc'

sayName('afwer')

function App() {
  return (
    <div id="app">
      App
      <Button type="danger">按钮</Button>
    </div>
  );
}

export default App;
