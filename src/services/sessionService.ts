export default class SessionService {
  static setUser(user: any) {
    return localStorage.setItem("UserAuth", JSON.stringify(user));
  }

  static getUser() {
    return JSON.parse(localStorage.getItem("UserAuth") || "null");
  }
  static isUserSet() {
    return JSON.parse(localStorage.getItem("UserAuth") || "false");
  }
  static getUserRole() {
    const userAuth = JSON.parse(localStorage.getItem("UserAuth") || "false");
    return userAuth.roleUser 
  }

  static isAdmin() : boolean {
    return this.getUserRole() === 0;
  }

  static getUserId(): string {
    return  this.getUser() && this.getUser().userDetailsId ? this.getUser().userDetailsId : '';
  }

  static clearUserSession() {
    localStorage.removeItem("UserAuth");
  }
  static clearSessionStorage() {
    localStorage.clear();
    sessionStorage.clear();
  }

  // for offer view for unloged Client
}
