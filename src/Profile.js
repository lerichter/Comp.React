import React from 'react';

const Profile = ({ user }) => (
    <div>
    <div className="row">
      <div className="col-md-4 ">
        <div className="card card-body" style={{ width: '20rem' }}>
          <img className="card-img-top" src={user.avatar_url} alt="foto"/>
          <ul className="list-group list-group-flush"> 
            <li className="list-group-item">Repositories: <span className="badge badge-success">{ user.public_repos }</span></li>
            <li className="list-group-item">Followers: <span className="badge badge-primary">{ user.followers }</span></li>
            <li className="list-group-item">Followings: <span className="badge badge-info">{ user.following }</span></li>          
          </ul>
          <div className="card-body">
            <a href="user.html_url" className="btn btn-warning btn-block">See Profile</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Profile