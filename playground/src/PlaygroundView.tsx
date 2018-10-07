import * as React from 'react';
// import * as tsdoc from '@microsoft/tsdoc';

interface IPlaygroundViewProps {
}

interface IPlaygroundViewState {
  inputText: string;
  outputText: string;
}

export class PlaygroundView extends React.Component<IPlaygroundViewProps, IPlaygroundViewState>  {
  private _reparseTimerHandle: number | undefined = undefined;
  private _reparseNeeded: boolean = true;

  constructor(props: IPlaygroundViewProps, context?: any) { // tslint:disable-line:no-any
    super(props, context);

    this.state = {
      inputText: '',
      outputText: ''
    };
  }

  public componentDidMount(): void {
    this._reparseTimerHandle = setInterval(this._reparseTimer_onTick.bind(this), 2000);
  }

  public componentWillUnmount(): void {
    if (this._reparseTimerHandle !== undefined) {
      clearInterval(this._reparseTimerHandle);
      this._reparseTimerHandle = undefined;
    }
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
      inputText: event.target.value
    });
    this._reparseNeeded = true;
  }

  private _reparseTimer_onTick(): void {
    if (!this._reparseNeeded) {
      return;
    }
    this._reparseNeeded = false;
    try {
      this.setState({
        outputText: this.state.inputText
      });
    } catch (error) {
      this.setState({
        outputText: 'Unhandled exception: ' + error.message
      });
    }
  }
}
