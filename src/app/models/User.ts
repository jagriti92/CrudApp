export interface User {
  firstName: string,
  lastName: string,
  email: string,
  isActive?: boolean,
  registered?: any,
  hide?: boolean
}

export class UserModel {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}