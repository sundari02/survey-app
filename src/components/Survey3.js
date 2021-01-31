import React from 'react';
import fire from './fire';

class Survey extends React.Component {
  constructor() {
    super()
    this.state={
      name: "",
      gender: "",
      age:"",
      home:"",
      destination:"",
      flight: "",
      show: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.showVals = this.showVals.bind(this)

  }
  
  handleChange(event) {
    const {name, value} = event.target
    this.setState(
      {[name] : value}
      )
  }
  
  showVals() {
    this.setState({show: true});
    var data = {
      Name: this.state.name,
      Gender: this.state.gender,
      Age: this.state.age,
      Hometown: this.state.home,
      Destination: this.state.destination,
      Flight: this.state.flight
    }
    fire.database().ref('Survey 3/').push(data);

  }
  
  render() {


    return (
      <div>

      <h2>Travel Form</h2>
      <div className="form">
      
        <div className="question1"> 
        <label>Name: <br/>
          <input type="text" name="name" value={this.state.name}
          onChange={this.handleChange}/>
        </label><br/>
        </div>

        <div className="question">
        <label >Gender: <br/>
          <input type="radio" name="gender" value="male"
          checked={this.state.gender=="male"} onChange={this.handleChange}/>Male
          <input type="radio" name="gender" value="female"
          checked={this.state.gender=="female"} onChange={this.handleChange}/>Female
        </label><br/>
        </div>
       
       <div className="question"> 
        <label>Age: <br/>
          <input type="text" name="age" value={this.state.age}
          onChange={this.handleChange}/>
        </label><br/>
        </div>
        
        <div className="question1">
         <label>Hometown: <br/>
          <input type="text" name="home" value={this.state.home}
          onChange={this.handleChange} />
        </label><br/>
        </div>
        
        <div className="question1">
        <label>Destination: <br/>
          <input type="text" name="destination" value={this.state.destination}
          onChange={this.handleChange} />
        </label>
        </div>

         <div className="question1">
        <label>Flight: <br/>
          <input type="text" name="flight" value={this.state.flight}
          onChange={this.handleChange} />
        </label>
        </div>

        <br/>
        </div>
        
        <div className="submit">
        <button onClick={this.showVals}>Submit</button>
        </div>
        
        <h3>Name: {this.state.show ? this.state.name : null} </h3>      
        <h3>Gender: {this.state.show ? this.state.gender : null} </h3>
        <h3>Age: {this.state.show ? this.state.age : null}</h3>
        <h3>Hometown: {this.state.show ? this.state.home : null} </h3>
        <h3>Destination: {this.state.show ? this.state.destination : null} </h3>
        <h3>Flight: {this.state.show ? this.state.flight : null} </h3>

      </div>
    );
  }
}

export default Survey