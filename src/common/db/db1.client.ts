import { Injectable } from '@nestjs/common';
import { ICustomerResponse } from '../interfaces/customer-response.interface';
import { IDb1Record } from './interfaces/db1.interface';

/**
 * This serves as the "stub" client that represents database interactions with DB1
 */
@Injectable()
export class Db1Client {
  private _dataStore: { [key: string]: IDb1Record } = {
    '1': {
      id: '1',
      firstName: 'Joe',
      lastName: 'Smith',
      age: 35,
      city: 'Denver',
      state: 'CO'
    },
    '3': {
      id: '3',
      firstName: 'Bob',
      lastName: 'Miller',
      age: 21,
      city: 'Dallas',
      state: 'TX'
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

  private translateResponse(record: IDb1Record): ICustomerResponse {
    return <ICustomerResponse>{
      id: record.id,
      customer: {
        firstName: record.firstName,
        lastName: record.lastName,
        age: record.age
      },
      location: {
        city: record.city,
        state: record.state
      }
    };
  }
}
