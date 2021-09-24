import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/common/db/database.service';
import { ICustomerResponse } from '../../common/interfaces/customer-response.interface';

@Injectable()
export class CustomerService {
  constructor(private _databaseService: DatabaseService) {}

  public getCustomerById(id: string): Promise<ICustomerResponse> {
    return this._databaseService.getCustomerById(id);
  }
}
