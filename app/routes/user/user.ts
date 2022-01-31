import { get, post } from '../../../utils/api';

export type User = {
  id: string;
  name: string;
  dob: string;
  phone_number: string;
};

export const getUser = () => get<User[]>('/users');

export const addUser = (payload: User) =>
  post<{ updatedRange: string }, Array<User>>('/users', [payload]);
