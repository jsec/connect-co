import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/db/database.module';
import { GuardsModule } from '../../common/guards/guards.module';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';

@Module({
  imports: [GuardsModule, DatabaseModule],
  controllers: [ResourceController],
  providers: [ResourceService]
})
export class ResourceModule {}
