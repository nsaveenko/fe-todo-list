import { authApi } from "api/auth.api";
import { pending, rejected, signupFulfilled } from "./authSlice";
import tokenService from "services/token.service";

const {
  signup,
  // signin,
  // logout,
  // refresh,
} = authApi;

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch(pending());
    const user = await signup(email, password);
    dispatch(signupFulfilled(user));
    if (user.accessToken) {
      tokenService.setUser(user);
    }
  } catch (error) {
    dispatch(rejected("Failed to signup"));
  }
};

// export const logout = createAsyncThunk("auth/logout", async () => {
//   await authApi.logout();
//   tokenService.removeUser();
// });

