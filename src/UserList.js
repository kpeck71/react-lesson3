import React, { Component } from 'react'

class UserList extends Component {
  render() {
    const profiles = this.props.profiles
    const movies = this.props.movies
    const users = this.props.users
    return (
    <ul className='user-list'>
     
        <li className='user-list-item'>
      {profiles.map(profile => (
      	<li key={profile.userID} className='user-list-detail'>{users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}. </li>
      	))
      }
        </li> 

    </ul>
    )
  }

}

export default UserList;