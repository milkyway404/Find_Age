import * as React from 'react';
import DropArea from './components/DropArea/DropArea'
import Header from './components/Header/Header'
import Result from './components/Result/Result'

interface IState {
  filelength: number
  result: string
  
}

class App extends React.Component<{}, IState> {
  public constructor(props:any) {
    super(props)
    this.state = {
      filelength:0,
      result: ""
    }
  }

  public resultstate = (resultString: string, filelen: any) => {
    this.setState({result: resultString, filelength: filelen})
  }

  public render() {
    return (
      <div>
        <Header />
        <DropArea setResults = {this.resultstate} />
        <Result result = {this.state.result} filelength = {this.state.filelength} />
      </div>
    );
  }
}

export default App;
