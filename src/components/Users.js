import React from 'react';

const Users = ({ users }) => {
  return (
    <div>
      <h1 className="text-center mb-5 font-extrabold text-6xl">Display Users 🐹</h1>
      <table className="min-w-full bg-color-secondary border border-gray-300 mx-4 my-4">
        <thead className="text-start">
          <tr>
            <th className="py-2 px-4 text-left border-b">Username</th>
            <th className="py-2 px-4 text-left border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
