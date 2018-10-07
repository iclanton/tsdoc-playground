import * as React from 'react';
import './App.css';
import { PlaygroundView } from './PlaygroundView';

class App extends React.Component {
  public render(): React.ReactNode {

    return (
      <div className='App'>
        <h1>TSDoc Playground</h1>

        <PlaygroundView />
      </div>
    );
  }
}

export default App;
