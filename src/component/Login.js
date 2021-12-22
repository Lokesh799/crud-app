import React, { Component } from 'react'



  const data = localStorage.getItem("user")
  

  
export default class Login extends Component {
  state={
    email:'',
    password:''
  }

    


  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="" className="form-group">
          <label htmlFor="">Email</label>
        <input type="text" className="form-control"/>
        <label htmlFor="">Password</label> 
        <input type="text" className="form-control"/>
        <button type='submit'></button>
        <div>
            {(data.map((m, i) => (
              <tr key={`${m + i}`}>
                <td>{m}</td>
              </tr>
            )))}
        </div>
        </form>
      </div>
    )
  }
}
