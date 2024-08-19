import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* Commented out ID so that only can be see internally */}
      {/* <p>Your ID is: {user.id}</p> */}
      {/* Added name, email, and phone to personal UserPage. */}
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
