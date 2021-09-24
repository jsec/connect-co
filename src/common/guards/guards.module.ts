import { Module } from '@nestjs/common';
import { StatusRoleGuard } from './status-role.guard';

@Module({
  providers: [StatusRoleGuard],
  exports: [StatusRoleGuard]
})
export class GuardsModule {}
