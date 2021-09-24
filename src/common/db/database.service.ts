import { Injectable } from '@nestjs/common';
import { ICustomerResponse } from '../interfaces/customer-response.interface';
import { Db1Client } from './db1.client';
import { Db2Client } from './db2.client';

@Injectable()
export class DatabaseService {
  constructor(private _db1Client: Db1Client, private _db2Client: Db2Client) {}

  public async getCustomerById(id: string): Promise<ICustomerResponse> {
    // Using Promise.any to make sure we're only taking the fulfilled promise
    // This is operating on the understanding that migrated data has been removed from the old source,
    // so there will only be one database that contains the record.
    // If migrated data potentially lived in both, there would be some sort of prioritization mechanism
    // to decide which db should serve as the source of truth

    const db1Query = this._db1Client.getData(id);
    const db2Query = this._db2Client.getData(id);

    return Promise.any([db1Query, db2Query]);
  }
}
