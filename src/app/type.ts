export interface Name {
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  gender: string;
  name: Name;
  email: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: Picture;
}

export interface ApiResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}