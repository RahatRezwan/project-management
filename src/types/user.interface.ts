export interface IUser {
   name: string;
   email: string;
   phone: string;
   role: string;
   avatar: string;
}

export interface IUserLoginSchema {
   email: string;
   password: string;
}
