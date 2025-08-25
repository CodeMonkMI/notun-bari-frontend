import { jwtDecode } from "jwt-decode";
import { LocalStorage } from "../localStorage";

class AuthToken extends LocalStorage {
  key: string = "authToken";
  decode(token: string = this.get()) {
    return jwtDecode(token);
  }
  isTokenValid() {
    const token = this.get();
    if (!token) return false;

    try {
      const decoded = this.decode();
      const currentTime = Math.floor(Date.now() / 1000);
      return Number(decoded.exp)! > currentTime;
    } catch {
      return false;
    }
  }
}

export const authToken = new AuthToken();
