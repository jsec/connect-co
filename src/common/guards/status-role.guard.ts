import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Status } from '../enums/status.enum';
import { IStatusUpdateDto } from '../interfaces/status-update-dto.interface';
import { IUser } from '../interfaces/user.interface';
import { AppRoles } from '../roles/app.roles';

@Injectable()
export class StatusRoleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const fakeUser: IUser = {
      id: 1,
      name: 'Test User',
      role: AppRoles.USER_COMPLETE_STATUS
    };

    request.body.user = fakeUser;
    return this.validateStatusRequest(request.body);
  }

  private validateStatusRequest(request: IStatusUpdateDto) {
    // FIXME: don't check the attribute programatically
    // fine-tune the role grants in app.roles.ts to do this for us
    if (
      request.status === Status.Completed &&
      request.user.role !== AppRoles.USER_COMPLETE_STATUS
    )
      return false;

    return true;
  }
}
