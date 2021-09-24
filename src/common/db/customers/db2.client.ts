import { Injectable } from '@nestjs/common';
import { ICustomerResponse } from '../../interfaces/customer-response.interface';
import { IDb2Record } from './interfaces/db2.interface';

/**
 * This serves as the "stub" client that represents database interactions with DB2
 */
@Injectable()
export class Db2Client {
  private _dataStore: { [key: string]: IDb2Record } = {
    '2': {
      id: '2',
      customer: {
        firstName: 'Tim',
        lastName: 'Green'
      },
      age: 42,
      location: {
        city: 'San Francisco',
        state: 'CA'
      }
    }
  };

  // Return a promise to simulate the asynchronous nature of making a db call/external API request
  public getData(id: string): Promise<ICustomerResponse> {
    return new Promise((resolve, reject) => {
      if (!this._dataStore[id]) reject();

      const response = this.translateResponse(this._dataStore[id]);
      resolve(response);
    });
  }

  private translateResponse(record: IDb2Record): ICustomerResponse {
    return <ICustomerResponse>{
      id: record.id,
      customer: {
        firstName: record.customer.firstName,
        lastName: record.customer.lastName,
        age: record.age
      },
      location: record.location
    };
  }
}
