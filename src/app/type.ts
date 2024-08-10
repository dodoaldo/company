export interface IUser {
  id: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  gender: string;
}
