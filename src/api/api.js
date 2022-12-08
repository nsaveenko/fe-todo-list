/* eslint-disable no-undef */
export async function http(path, config) {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  config.headers = { "Content-Type": "application/json" };

  return fetch(`${baseUrl + path}`, config)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject();
    })
    .catch((error) => error.message);
}

export class Api {
  static async get({ path, config }) {
    const init = { method: "get", ...config };
    return http(path, init);
  }

  static async post({ path, body, config }) {
    const init = {
      method: "post",
      body: JSON.stringify(body),
      ...config,
    };
    return http(path, init);
  }

  static async put({ path, body, config }) {
    const init = {
      method: "put",
      body: JSON.stringify(body),
      ...config,
    };
    return http(path, init);
  }

  static async delete({ path, body, config }) {
    const init = { method: "delete", body: JSON.stringify(body), ...config };
    return http(path, init);
  }
}
