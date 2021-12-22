import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavLink extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-link">
                  <Link className='link-primary' to='/reg'>Registartion</Link>
                </li>
                <li class="nav-link">
                  <Link className='link-primary' to='/login'>Login</Link>
                </li>
                <li class="nav-link">
                  <Link className='link-primary' to='/add'>AddItem</Link>
                </li><br />
                <li class="nav-link">
                  <Link className='link-info' to='/dlt'>DeleteItem</Link>
                </li>
                <li class="nav-link">
                  <Link className='link-warnig' to='/update'>UpdatItem</Link>
                </li>
                <li class="nav-link">
                  <Link className='link-danger' to='/show'>ShowItem</Link>
                </li>
                {/* <button
                      onClick={onLogOut}
                      className="bg-red-500 hover:bg-red-700 text-red font-bold py-2 px-4 rounded">
                      Logout
                    </button> */}
              </ul>
            </div>
          </div>
        </nav >
      </div>
    )
  }
}
