import { Status } from '../enums/status.enum';
import { IUser } from './user.interface';

export interface IStatusUpdateDto {
  id: number;
  status: Status;
  user: IUser;
}
