import { Injectable, NotFoundException } from '@nestjs/common';
import { ResourceDatabaseService } from '../../common/db/resources/resource-database.service';
import { Status } from '../../common/enums/status.enum';
import { IResource } from '../../common/interfaces/resource.interface';
import { IStatusUpdateDto } from '../../common/interfaces/status-update-dto.interface';

@Injectable()
export class ResourceService {
  constructor(private _resourceDatabase: ResourceDatabaseService) {}

  // stub in-memory store for resources to be updated
  private _resources: IResource[] = [
    {
      id: 1,
      value: 'Resource 1',
      status: Status.InProgress
    },
    {
      id: 2,
      value: 'Resource 2',
      status: Status.InProgress
    },
    {
      id: 1,
      value: 'Resource 3',
      status: Status.Completed
    }
  ];

  public async getAll(): Promise<IResource[]> {
    return this._resourceDatabase.getAllResources();
  }

  public async getById(id: number): Promise<IResource> {
    const resource = await this._resourceDatabase.getResourceById(id);

    if (!resource) throw new NotFoundException();

    return resource;
  }

  // eslint-disable-next-line prettier/prettier
  public async updateStatus(statusUpdate: IStatusUpdateDto): Promise<IResource> {

    // eslint-disable-next-line prettier/prettier
    const resource = await this._resourceDatabase.getResourceById(statusUpdate.id);

    if (!resource) throw new NotFoundException();

    resource.status = statusUpdate.status;
    const savedResource = await this._resourceDatabase.saveResource(resource);
    return savedResource;
  }
}
