import React, { Fragment } from 'react';

import Graphic from './components/Graphic';
import { GRAPHICS } from './constants';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {GRAPHICS.map(graphic => (
          <Fragment key={graphic.id}>
            <Graphic
              type={graphic.type}
              width={graphic.width}
              height={graphic.height}
              data={graphic.data}
            />
            <hr className="separator" />
          </Fragment>
        ))}
      </header>
    </div>
  );
}

export default App;
