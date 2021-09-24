import { AppRoles } from '../roles/app.roles';

export interface IUser {
  id: number;
  name: string;
  role: AppRoles;
}
