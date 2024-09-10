import { UserToWebsiteRoles } from "./UserToWebsiteEntity";

export class UserEntity {
  id: string;
  email: string;
  language: string;
  created_at: Date;
  username: string | null;
  last_connected_at: Date;
  welcome_email_sent_at: Date | null;
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

export class UserToGoogleSearchConsoleWithEmailsEntity {
  id : number;
  user_parent_id:string;
  user_children_id: string;
  created_at: Date;
  parent_email: string;
  children_email: string;
}
