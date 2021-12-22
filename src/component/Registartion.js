import React, { Component } from 'react'


const getDataLocalStorage = () =>{
  const data = localStorage.getItem("user")
  if(data){
   return JSON.parse(data)
  }
    else{
      return []
    }
  }


export default class Registartion extends Component {
  state = {
    name: '',
    email: '',
    Id: '',
    password: '',
    user: getDataLocalStorage()
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const { name, email, Id, password, user } = this.state;
    const data = { name, email, Id, password }
    this.setState({ user: [...user, data] })
  alert('you are register')
  }

  componentDidUpdate(){
    const {user} = this.state
    localStorage.setItem('user',JSON.stringify(user))
  }


  render() {
    const { name, email, Id, password } = this.state
    const data = { name, email, Id, password }
  

    return (
      <div>
        <h1>Registration</h1>
        <form action="" className="form-group" onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input className="form-control" type="text" name="email" onChange={(e) => this.setState({ email: e.target.value })} />
          <label>Name</label>
          <input className="form-control" type="text" onChange={(e) => this.setState({ name: e.target.value })} />
          <label >ID</label>
          <input className="form-control" type="text" onChange={(e) => this.setState({ Id: e.target.value })} />
          <label>Password</label>
          <input className="form-control" type="text" onChange={(e) => this.setState({ password: e.target.value })} />
          <button type="submit" className='btn btn-primary' onClick={() => this.props.history.push('/login')} >Submit</button>
        </form>
      </div>
    )
  }
}

