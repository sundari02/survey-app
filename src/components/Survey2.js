import React from 'react';


class Survey2 extends React.Component {
  constructor() {
    super()
    this.state={
      
      name: "",
      gender: "",
      age:"",
      interests:"",
      height:"",
      comments: "",
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
    this.setState({show: true})
  }
  
  render() {
    return (
      <div>
      <h2>Interest Form</h2>
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
         <label>Interests: <br/>
          <textarea name="interests" value={this.state.interests}
          onChange={this.handleChange} /> 
        </label><br/>
        </div>

        <div className="question">
         <label>Other comments: <br/>
          <textarea name="comments" value={this.state.comments}
          onChange={this.handleChange} /> 
        </label><br/>
        </div>
        
        </div>
        <br/>
        
        <div className="submit">
        <button onClick={this.showVals}>Submit</button>
        </div>  
        <h3>Name: {this.state.show ? this.state.name : null} </h3>      
        <h3>Gender: {this.state.show ? this.state.gender : null} </h3>
        <h3>Age: {this.state.show ? this.state.age : null}</h3>
        <h3>Interests: {this.state.show ? this.state.interests : null}</h3>
        <h3>Comments: {this.state.show ? this.state.comments : null}</h3>
      </div>
    );
  }
}

export default Survey2