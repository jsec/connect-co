import { Controller, Get, Param } from '@nestjs/common';
import { ICustomerResponse } from '../../common/interfaces/customer-response.interface';

@Controller('customer')
export class CustomerController {
  @Get(':id')
  public getCustomer(@Param() params): ICustomerResponse {
    console.log(params);
    return <ICustomerResponse>{};
  }
}
