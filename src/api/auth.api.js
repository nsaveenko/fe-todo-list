import { Api } from "./api";

export const authApi = {
  signup: (email, password) =>
    Api.post({
      path: "signup",
      body: { email, password, role: "user" },
    }),
  signin: ({ email, password }) =>
    Api.post({
      path: "signin",
      body: { email, password },
    }),
  logout: () => Api.post({ path: "logout" }),
  refresh: () => Api.get({ path: "refresh" }),
};
