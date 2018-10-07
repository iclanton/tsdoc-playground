import * as React from 'react';

interface IPlaygroundViewProps {
}

interface IPlaygroundViewState {
  inputText: string;
  outputText: string;
}

export class PlaygroundView extends React.Component<IPlaygroundViewProps, IPlaygroundViewState>  {
  constructor(props: IPlaygroundViewProps, context?: any) { // tslint:disable-line:no-any
    super(props, context);

    this.state = {
      inputText: '',
      outputText: ''
    };
  }

  public render(): React.ReactNode {
    const textAreaStyle: React.CSSProperties = {
      width: '600px',
      height: '400px'
    };

    return (
      <div>
        <textarea
          id='input-textarea'
          style={ textAreaStyle }
          value={ this.state.inputText }
          onChange={ this._inputTextArea_onChange.bind(this) }
          />
        <textarea
          id='output-textarea'
          readOnly={ true }
          value={ this.state.outputText }
          style={ textAreaStyle }
          />
      </div>
    );
  }

  private _inputTextArea_onChange(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    this.setState({
      inputText: event.target.value,
      outputText: event.target.value
    });
  }
}
