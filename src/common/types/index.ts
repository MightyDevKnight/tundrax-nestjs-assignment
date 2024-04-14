export enum Roles {
  Admin = 1,
  User = 2,
}

export type LoginResponseType = Readonly<{
  token?: string;
  tokenExpires?: number;
  statusCode: string;
}>;
