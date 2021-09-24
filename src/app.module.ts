import { Module } from '@nestjs/common';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './common/roles/app.roles';
import { CustomerModule } from './routes/customer/customer.module';
import { ResourceModule } from './routes/resource/resource.module';

@Module({
  imports: [CustomerModule, ResourceModule, AccessControlModule.forRoles(roles)]
})
export class AppModule {}
