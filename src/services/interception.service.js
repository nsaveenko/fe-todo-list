import tokenService from "services/token.service";
// import { store } from "store/store";
// import { logout, refresh } from "state/auth/authSlice";

const { fetch: originalFetch } = window;

const interceptedFetch = async (...args) => {
  const [resource, config] = args;
  const accessToken = tokenService.getLocalAccessToken();
  const refreshToken = tokenService.getLocalRefreshToken();

  if (accessToken) config.headers.authorization = `Bearer ${accessToken}`;

  const request = new Request(resource, config);
  const response = await originalFetch(request);

  response
    .clone()
    .json()
    .then((res) => {
      if (res.message && res.message.includes("Access token has expired")) {
        if (refreshToken) {
          // store.dispatch(refresh(refreshToken));
          console.log("refresh")
        } else {
          tokenService.removeUser();
        }
        window.location.reload();
      }

      if (res.message && res.message.includes("Refresh token has expired")) {
        // store.dispatch(logout());
        console.log("logout")
      }
    })
    .catch();

  return response;
};

export default interceptedFetch;
