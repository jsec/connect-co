import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { IUser } from '../../common/interfaces/user.interface';
import { Status } from '../../common/enums/status.enum';
import { IResource } from '../../common/interfaces/resource.interface';
import { IStatusUpdateDto } from '../../common/interfaces/status-update-dto.interface';
import { AppRoles } from 'src/common/roles/app.roles';

@Injectable()
export class ResourceService {
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

  public updateStatus(statusUpdate: IStatusUpdateDto): void {
    console.log('we good');
    const resource = this._resources.find((r) => r.id === statusUpdate.id);
    if (!resource) throw new NotFoundException();

    resource.status = statusUpdate.status;
  }
}
