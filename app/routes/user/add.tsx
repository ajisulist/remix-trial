import { ActionFunction, Form } from 'remix';
import { addUser, User } from './user';
import { v4 as uuidv4 } from 'uuid';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const payload: User = {
    id: uuidv4(),
    name: formData.get('name') as string,
    dob: formData.get('dob') as string,
    phone_number: formData.get('phone_number') as string,
  };
  await addUser(payload);
  return null;
};
export default function Add() {
  return (
    <div>
      <h1>User</h1>
      <Form style={{ display: 'flex', flexDirection: 'column' }} method="post">
        <table>
          <tr>
            <td>Name:</td>
            <td>
              <input name="name" type="text" />
            </td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>
              <input name="dob" type="text" />
            </td>
          </tr>

          <tr>
            <td>Phone</td>
            <td>
              <input name="phone_number" type="text" />
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <button type="submit">Add New User</button>
            </td>
          </tr>
        </table>
      </Form>
    </div>
  );
}
