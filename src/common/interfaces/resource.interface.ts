import { Status } from '../enums/status.enum';

export interface IResource {
  id: number;
  value: string;
  status: Status;
}
