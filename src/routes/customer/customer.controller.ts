import { Controller, Get, Param } from '@nestjs/common';
import { ICustomerResponse } from '../../common/interfaces/customer-response.interface';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private _customerService: CustomerService) {}

  @Get(':id')
  public async getCustomer(@Param() params): Promise<ICustomerResponse> {
    // I like keeping the controller level as thin as possible, delegate business logic to services
    return this._customerService.getCustomerById(params.id);
  }
}
