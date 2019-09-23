import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  
  state = {
    mortgage: null,
    propertyTax: null,
    insurance: null
  }
  
  setValue = mortgage => {
    mortgage = Number(mortgage);
    const propertyTax = mortgage * 0.27;
    const insurance = mortgage * 0.08;
    this.setState({ mortgage, propertyTax, insurance })
  }
  
  
  render(){
  return (
    <div className="App">
      <Calculator data={this.state} getMortgage={this.setValue} />
    </div>
  );
}
}

export default App;
