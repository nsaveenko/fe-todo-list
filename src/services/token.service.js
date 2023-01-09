class TokenService {
  getLocalRefreshToken() {
    const userJson = localStorage.getItem("user");
    const user = userJson ? JSON.parse(userJson) : null;
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const userJson = localStorage.getItem("user");
    const user = userJson ? JSON.parse(userJson) : null;
    return user?.accessToken;
  }

  updateLocalTokens(tokens) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    const newUser = { ...user, ...tokens };
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  getUser() {
    const userJson = localStorage.getItem("user");
    return userJson ? JSON.parse(userJson) : null;
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem("user");
  }
}
export default new TokenService();