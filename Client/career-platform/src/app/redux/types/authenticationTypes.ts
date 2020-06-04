import { ICourses } from "src/app/models/models";

export interface IState {
  token: string;
  user: IUser;
  authenticated: boolean;
}

export interface IUser {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  userDetails: any;
  courses?: Array<ICourses>;
  role: string;
}
