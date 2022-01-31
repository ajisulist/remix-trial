import React from 'react';
import { Link } from 'react-router-dom';

import { useLoaderData } from 'remix';
import { getUser, User } from './user';

export const loader = async (): Promise<User[]> => {
  return await getUser();
};

export default function User() {
  const users = useLoaderData<User[]>();

  return (
    <div>
      <h1>User</h1>
      <Link to="add">Add New User</Link>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Date of Birth</td>
            <td>Phone</td>
          </tr>
        </thead>

        <tbody>
          {users.map((el) => (
            <tr>
              <td>{el.name}</td>
              <td>{el.dob}</td>
              <td>{el.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
