import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    contador: 0
  }

  incrementar = () => {
    this.setState({
      contador: this.state.contador+1
    })
  }

  decrementar = () =>{
    this.setState({
      contador: this.state.contador-1
    })
  }

  zerar = () =>{
    this.setState({
      contador: this.state.contador = 0
    })
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
       Contador: {this.state.contador}
       <button onClick={this.incrementar}>+</button>
       <button onClick={this.decrementar}>-</button>
       <button onClick={this.zerar}>Zerar</button>
      </header>
    </div>
    );
  }
}

export default App;
