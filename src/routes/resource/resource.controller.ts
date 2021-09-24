import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { IStatusUpdateDto } from '../../common/interfaces/status-update-dto.interface';
import { ResourceService } from './resource.service';
import { ACGuard } from 'nest-access-control';
import { StatusRoleGuard } from '../../common/guards/status-role.guard';
import { IResource } from '../../common/interfaces/resource.interface';

@Controller('resource')
export class ResourceController {
  constructor(private _resourceService: ResourceService) {}

  @Get()
  public getAllResources(): Promise<IResource[]> {
    return this._resourceService.getAll();
  }

  @Get(':id')
  public async getResourceById(@Param() params): Promise<IResource> {
    const resource = await this._resourceService.getById(parseInt(params.id));
    return resource;
  }

  @UseGuards(StatusRoleGuard, ACGuard)
  @Put(':id')
  public updateResourceStatus(@Body() dto: IStatusUpdateDto): void {
    this._resourceService.updateStatus(dto);
  }
}
