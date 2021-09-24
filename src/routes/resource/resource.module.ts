import { Module } from '@nestjs/common';
import { GuardsModule } from '../../common/guards/guards.module';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';

@Module({
  imports: [GuardsModule],
  controllers: [ResourceController],
  providers: [ResourceService]
})
export class ResourceModule {}
