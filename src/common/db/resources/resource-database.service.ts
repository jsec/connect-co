import { Injectable } from '@nestjs/common';
import { Status } from '../../enums/status.enum';
import { IResource } from '../../interfaces/resource.interface';

@Injectable()
export class ResourceDatabaseService {
  // stub in-memory store for resources to be updated
  private _resourceStore: IResource[] = [
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
      id: 3,
      value: 'Resource 3',
      status: Status.Completed
    }
  ];

  public async getAllResources(): Promise<IResource[]> {
    return this._resourceStore;
  }

  public async getResourceById(id: number): Promise<IResource> {
    return new Promise((resolve, reject) => {
      const resource = this._resourceStore.find((r) => r.id === id);
      if (!resource) reject();

      resolve(resource);
    });
  }

  public async saveResource(resource: IResource): Promise<IResource> {
    return new Promise((resolve) => {
      let existingResource = this._resourceStore.find(
        (r) => r.id !== resource.id
      );

      if (!existingResource) {
        this._resourceStore.push(resource);
      }

      // Poor man's upsert given time constraints
      existingResource = resource;
      resolve(resource);
    });
  }
}
