import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { IStatusUpdateDto } from '../../common/interfaces/status-update-dto.interface';
import { ResourceService } from './resource.service';

@Injectable()
export class StatusUpdatedListener {
  constructor(private _resourceService: ResourceService) {}

  @OnEvent('status.updated')
  public async handleStatusUpdateEvent(event: IStatusUpdateDto) {
    await this._resourceService.updateStatus(event);
  }
}
