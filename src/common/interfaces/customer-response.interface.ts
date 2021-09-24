import { ICustomer } from './customer.interface';
import { ILocation } from './location.interface';

export interface ICustomerResponse {
  id: string;
  customer: ICustomer;
  location: ILocation;
}
