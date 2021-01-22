import React from 'react';
import fire from './fire';

class Survey extends React.Component {
  constructor() {
    super()
    this.state={
      name: "",
      gender: "",
      age:"",
      weight:"",
      height:"",
      show: false
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
    fire.database().ref('survey1/p1/name/').push(this.state.name);


  }
  
  render() {


    return (
      <div>

      <h2>Health Form</h2>
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
        
        <div className="question">
         <label>Weight: <br/>
          <input type="text" name="weight" value={this.state.weight}
          onChange={this.handleChange} /> kg
        </label><br/>
        </div>
        
        <div className="question">
        <label>Height: <br/>
          <input type="text" name="height" value={this.state.height}
          onChange={this.handleChange} /> cm
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
        <h3>Weight: {this.state.show ? this.state.weight : null} kg</h3>
        <h3>Height: {this.state.show ? this.state.height : null} cm</h3>

      </div>
    );
  }
}

export default Survey