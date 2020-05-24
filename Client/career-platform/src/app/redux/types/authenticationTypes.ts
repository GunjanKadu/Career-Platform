export interface IState {
  token: string;
  user: IUser;
}

export interface IUser {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  userDetails: any;
}
