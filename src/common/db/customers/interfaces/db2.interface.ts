import { ICustomerBase } from '../../../interfaces/customer-base.interface';
import { ILocation } from '../../../interfaces/location.interface';

export interface IDb2Record {
  id: string;
  customer: ICustomerBase;
  age: number;
  location: ILocation;
}
