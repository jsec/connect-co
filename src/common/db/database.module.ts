import { Module } from '@nestjs/common';
import { CustomerDatabaseService } from './customers/customer-database.service';
import { Db1Client } from './customers/db1.client';
import { Db2Client } from './customers/db2.client';
import { ResourceDatabaseService } from './resources/resource-database.service';

@Module({
  providers: [
    CustomerDatabaseService,
    Db1Client,
    Db2Client,
    ResourceDatabaseService
  ],
  exports: [CustomerDatabaseService, ResourceDatabaseService]
})
export class DatabaseModule {}
