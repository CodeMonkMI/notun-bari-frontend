import { jwtDecode } from "jwt-decode";
import { LocalStorage } from "../localStorage";
class RefreshToken extends LocalStorage {
  key: string = "refreshToken";
  decode(token: string = this.get()) {
    return jwtDecode(token);
  }
  isValid() {
    const token = this.get();
    if (!token) return false;

    try {
      const decoded = this.decode();
      const currentTime = Math.floor(Date.now() / 1000);
      console.log(typeof decoded.exp, { decoded });
      return Number(decoded.exp)! > currentTime;
    } catch {
      return false;
    }
  }
}

export const refreshToken = new RefreshToken();
