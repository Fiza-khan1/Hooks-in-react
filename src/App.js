import React, { useState } from 'react';

function App() {
  const users = [
    { id: 1, name: "Alice", age: 30, location: "New York" },
    { id: 2, name: "Bob", age: 25, location: "San Francisco" },
    { id: 3, name: "Charlie", age: 35, location: "Chicago" }
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('admin');

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} role={role} users={users} />
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}

function Greeting({ isLoggedIn, role, users }) {
  if (isLoggedIn) {
    return (
      <>
        <h1>Welcome back!</h1>
        <UserRole role={role} users={users} />
      </>
    );
  } else {
    return <h1>Please sign up.</h1>;
  }
}

function UserRole({ role, users }) {
  switch (role) {
    case 'admin':
      return (
        <>
          <p>You are an admin.</p>
          <ShowList users={users} />
        </>
      );
    case 'superuser':
      return <p>You are a superuser.</p>;
    case 'staff':
      return <p>You are staff.</p>;
    default:
      return <p>Unknown role.</p>;
  }
}

function ShowList({ users }) {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Location: {user.location}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
