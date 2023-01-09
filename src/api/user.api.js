import { Api } from "./api";

export const userApi = {
  getAllUsers: () => Api.get({ path: "users" }),
};
