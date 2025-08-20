import { LocalStorage } from "../localStorage";

class RefreshToken extends LocalStorage {
  key: string = "refreshToken";
}

export const refreshToken = new RefreshToken();
