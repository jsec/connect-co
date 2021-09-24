import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { Db1Client } from './db1.client';
import { Db2Client } from './db2.client';

@Module({
  providers: [DatabaseService, Db1Client, Db2Client],
  exports: [DatabaseService]
})
export class DatabaseModule {}
