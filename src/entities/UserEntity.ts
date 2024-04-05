import { UserToWebsiteRoles } from "./UserToWebsiteEntity";

export class UserEntity {
  id: string;
  email: string;
  language: string;
  created_at: Date;
}

export type UserWithRoleEntity = UserEntity & {
  role: UserToWebsiteRoles
}

export class UserToGoogleSearchConsoleEntity {
  id : number;
  user_parent_id:string;
  user_children_id: string;
  created_at: Date;
}
