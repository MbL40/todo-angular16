export interface IUser {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}


export interface UserState {
  user: IUser;
}

export const initialState: UserState = {
  user: {
    displayName: '',
    email: '',
    photoURL: ''
  }
};

