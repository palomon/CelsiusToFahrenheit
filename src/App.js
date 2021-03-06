import React, { Component } from 'react';
import './asset/css/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      C: 0,
      F: 0,
    };
  }

  changeCeltoFah(i){
    const Celsius = this.refs.CelsiusText;
    const Fahrenheit = this.refs.FahrenheitText;
    if(isNaN(parseFloat(Celsius.value))){
      Fahrenheit.value = '';
      return;
    }
    let decimal = 2;
    if(parseFloat(Celsius.value).toString().split('.')[1] !== undefined)
    {
       decimal = parseFloat(Celsius.value).toString().split('.')[1].length || 0;
    }
    if(decimal < 2){
      decimal = 2;
    }
    Fahrenheit.value = ((parseFloat(Celsius.value) * (9/5)) + 32).toFixed(decimal);
  }
  
  changeFahtoCel(i){
    const Fahrenheit = this.refs.FahrenheitText;
    const Celsius = this.refs.CelsiusText;
    if(isNaN(parseFloat(Fahrenheit.value))){
      Celsius.value = '';
      return;
    }
    let decimal = 2;
    if(parseFloat(Fahrenheit.value).toString().split('.')[1] !== undefined)
    {
       decimal = parseFloat(Fahrenheit.value).toString().split('.')[1].length || 0;
    }
    if(decimal < 2){
      decimal = 2;
    }
    Celsius.value = ((parseFloat(Fahrenheit.value)-32) * 5/9).toFixed(decimal);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="card">
              <h3>Hello</h3>
              <hr/>
              <form className="form-horizontal">
                <div className="form-group">
                  <label>Celsius
                    <input type="number" ref="CelsiusText" className="form-control" autoFocus onChange={() => this.changeCeltoFah()}/>
                  </label>
                </div>
                <div className="form-group">
                  <label>Fahrenheit
                    <input type="number" ref="FahrenheitText" className="form-control" onChange={() => this.changeFahtoCel()}/>
                  </label>
                </div>
              </form>
              <hr/>
              <h4>--</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
