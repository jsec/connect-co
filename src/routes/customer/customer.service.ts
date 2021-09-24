import { Injectable } from '@nestjs/common';
import { CustomerDatabaseService } from '../../common/db/customers/customer-database.service';
import { ICustomerResponse } from '../../common/interfaces/customer-response.interface';

@Injectable()
export class CustomerService {
  constructor(private _databaseService: CustomerDatabaseService) {}

  public getCustomerById(id: string): Promise<ICustomerResponse> {
    return this._databaseService.getCustomerById(id);
  }
}
