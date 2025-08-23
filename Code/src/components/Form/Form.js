import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName: '',
       comments: '',
       topic: 'React'
    }
  }
 handleFormChange = (event) =>{
  this.setState({
    userName: event.target.value
  })
 }
 handleCommentsChange = (event) =>{
  this.setState({
    comments:event.target.value
  })
  console.log(this.state.comments)
 }
 handleTopicChange =(event) =>{
  this.setState({
    topic: event.target.value
  })
 }
 handleSubmit = (e) =>{
  e.preventDefault();
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
 }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserName</label>
            <input type='text'
                   value={this.state.userName}
                   onChange={this.handleFormChange}
            /> 
          </div>
          <div>
            <label>COmments</label>
            <textarea 
             value ={this.state.comments}
             onChange={this.handleCommentsChange}
            />
          </div>
          <div>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value='react'>React</option>
              <option   value='TypeScript'>TypeScript</option>
              <option   value='JavaScript'>JavaScript</option>  
            </select>
          </div>
          <button type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
