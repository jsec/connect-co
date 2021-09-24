import { Body, Controller, Put, UseGuards } from '@nestjs/common';
import { IStatusUpdateDto } from '../../common/interfaces/status-update-dto.interface';
import { ResourceService } from './resource.service';
import { ACGuard } from 'nest-access-control';
import { StatusRoleGuard } from '../../common/guards/status-role.guard';

@Controller('resource')
export class ResourceController {
  constructor(private _resourceService: ResourceService) {}

  @UseGuards(StatusRoleGuard, ACGuard)
  @Put(':id')
  public updateResourceStatus(@Body() dto: IStatusUpdateDto): void {
    console.log('updating status');
    this._resourceService.updateStatus(dto);
  }
}
