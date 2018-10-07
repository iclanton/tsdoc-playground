import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render(): React.ReactNode {
    const textAreaStyle: React.CSSProperties = {
      width: '600px',
      height: '400px'
    };

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          <textarea style={ textAreaStyle }>
            blah
          </textarea>
        </p>
      </div>
    );
  }
}

export default App;
