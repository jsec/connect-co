import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  USER_STATUS_INPROGRESS = 'USER_STATUS_INPROGRESS',
  USER_COMPLETE_STATUS = 'USER_COMPLETE_STATUS'
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(AppRoles.USER_STATUS_INPROGRESS)
  .readAny('resource')
  .updateAny('resource', ['status'])
  .grant(AppRoles.USER_COMPLETE_STATUS)
  .readAny('resource')
  .updateAny('resource', ['status']);
