import { Injectable } from '@nestjs/common';
import { ICustomerResponse } from '../../common/interfaces/customer-response.interface';

@Injectable()
export class CustomerService {
  public getCustomerById(id: string): ICustomerResponse {
    return <ICustomerResponse>{};
  }
}
